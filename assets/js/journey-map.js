(function() {
  console.log('[Map Debug] Script started');
  
  var retryCount = 0;
  var maxRetries = 50;
  
  // Wait for everything to load
  function initMap() {
    retryCount++;
    
    if (typeof L === 'undefined') {
      console.log('[Map Debug] Leaflet not loaded yet, retry ' + retryCount + '/' + maxRetries);
      
      if (retryCount >= maxRetries) {
        console.error('[Map Debug] Failed to load Leaflet after ' + maxRetries + ' attempts');
        console.error('[Map Debug] Check Network tab for /assets/leaflet/leaflet.js');
        var mapEl = document.getElementById('journey-map');
        if (mapEl) {
          mapEl.innerHTML = '<div style="text-align: center; padding: 2em; opacity: 0.5; font-family: Inter, sans-serif;">' +
                            '<div>Map library failed to load</div>' +
                            '<div style="font-size: 0.85em; margin-top: 0.5em;">Check browser console for details</div>' +
                            '</div>';
        }
        return;
      }
      
      setTimeout(initMap, 100);
      return;
    }
    
    console.log('[Map Debug] Leaflet loaded successfully! Version:', L.version);
    
    // Hide loading indicator
    var loadingEl = document.getElementById('map-loading');
    if (loadingEl) {
      loadingEl.style.display = 'none';
    }
    
    try {
      // Initialize map
      var map = L.map('journey-map', {
        zoomControl: true,
        scrollWheelZoom: false,
        dragging: true,
        touchZoom: true,
        doubleClickZoom: false,
        minZoom: 2,
        maxZoom: 7,
        maxBounds: [[-90, -180], [90, 180]]
      }).setView([48, 30], 4);

      // Check if dark mode is active
      var isDarkMode = sessionStorage.getItem('theme') === 'dark';
      
      // Choose tile layer based on theme with fallback
      var tileUrl = isDarkMode 
        ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
        : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
      
      var fallbackTileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
      
      console.log('[Map Debug] Loading tile layer:', tileUrl);
      
      var tileLayer = L.tileLayer(tileUrl, {
        attribution: '',
        maxZoom: 19,
        crossOrigin: true,
        errorTileUrl: fallbackTileUrl
      }).addTo(map);
      
      // Track tile errors and switch to fallback if needed
      var tileErrorCount = 0;
      tileLayer.on('tileerror', function(error) {
        tileErrorCount++;
        console.warn('[Map Debug] Tile loading error (count: ' + tileErrorCount + '):', error);
        
        // If too many tile errors, switch to fallback
        if (tileErrorCount > 10) {
          console.log('[Map Debug] Switching to fallback tile provider (OpenStreetMap)');
          map.removeLayer(tileLayer);
          tileLayer = L.tileLayer(fallbackTileUrl, {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19,
            crossOrigin: true
          }).addTo(map);
          tileErrorCount = 0;
        }
      });
      
      tileLayer.on('load', function() {
        console.log('[Map Debug] Map tiles loaded successfully');
      });
      
      // Function to update map theme dynamically
      window.updateMapTheme = function(theme) {
        // Update tile layer
        var newTileUrl = theme === 'dark'
          ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
          : 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png';
        
        console.log('[Map Debug] Updating map theme to:', theme, 'with tiles:', newTileUrl);
        
        map.removeLayer(tileLayer);
        tileLayer = L.tileLayer(newTileUrl, {
          attribution: '',
          maxZoom: 19,
          crossOrigin: true
        }).addTo(map);
        
        // Add error handling for new tile layer
        tileLayer.on('tileerror', function(error) {
          console.error('[Map Debug] Tile loading error (theme update):', error);
        });
        
        // Update label colors based on theme
        var isDark = theme === 'dark';
        var labels = document.querySelectorAll('.map-label:not(.current)');
        labels.forEach(function(label) {
          label.style.background = isDark ? 'rgba(42, 42, 42, 0.95)' : 'rgba(254, 252, 245, 0.95)';
          label.style.borderColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)';
        });
        
        var labelTexts = document.querySelectorAll('.map-label:not(.current) strong, .map-label:not(.current) .label-year');
        labelTexts.forEach(function(text) {
          text.style.color = isDark ? '#eaeaea' : '#2d2d2d';
        });
      };

      // Journey locations
      var locations = [
        {lat: 22.5726, lng: 88.3639, name: 'Kolkata, India', desc: 'Origins', year: ''},
        {lat: 46.2530, lng: 20.1414, name: 'Szeged, Hungary', desc: 'Research Training', year: '2017-2018'},
        {lat: 52.3676, lng: 4.9041, name: 'Amsterdam, Netherlands', desc: 'PhD @ VU Amsterdam', year: '2018-2023'},
        {lat: 46.2530, lng: 20.1414, name: 'Szeged, Hungary', desc: 'Research @ BRC', year: '2020-2023'},
        {lat: 59.9139, lng: 10.7522, name: 'Oslo, Norway', desc: 'Growth Engineer @ Riff', year: '2023-Present', current: true}
      ];

      // Add markers with clean circles and permanent labels
      locations.forEach(function(loc, index) {
        var markerBg = loc.current ? '#2563eb' : (isDarkMode ? '#1a1a1a' : '#fefcf5');
        
        // Marker with label
        var markerIcon = L.divIcon({
          html: '<div class="map-marker ' + (loc.current ? 'current' : '') + '" style="background: ' + markerBg + '"></div>' +
                '<div class="map-label ' + (loc.current ? 'current' : '') + '">' +
                '<strong>' + loc.name + '</strong>' +
                (loc.year ? '<br><span class="label-year">' + loc.year + '</span>' : '') +
                '</div>',
          className: 'custom-marker-wrapper',
          iconSize: [16, 16]
        });
        
        var marker = L.marker([loc.lat, loc.lng], {icon: markerIcon}).addTo(map);
        
        // Optional popup with more details on hover
        var popupBg = isDarkMode ? '#2a2a2a' : '#fefcf5';
        var popupColor = isDarkMode ? '#eaeaea' : '#2d2d2d';
        var popupContent = '<div style="text-align: center; font-family: Inter, sans-serif; min-width: 140px; color: ' + popupColor + ';">' +
                           '<strong style="font-size: 1em; display: block; margin-bottom: 4px;">' + loc.name + '</strong>' + 
                           (loc.year ? '<span style="font-size: 0.8em; opacity: 0.6; display: block; margin-bottom: 4px;">' + loc.year + '</span>' : '') +
                           '<span style="font-size: 0.85em; opacity: 0.75;">' + loc.desc + '</span></div>';
        marker.bindPopup(popupContent);
        
        // Draw curved connecting lines (arc effect)
        if (index < locations.length - 1) {
          var nextLoc = locations[index + 1];
          
          // Calculate curve control point (creates arc effect)
          var midLat = (loc.lat + nextLoc.lat) / 2;
          var midLng = (loc.lng + nextLoc.lng) / 2;
          var distance = Math.sqrt(Math.pow(nextLoc.lat - loc.lat, 2) + Math.pow(nextLoc.lng - loc.lng, 2));
          var offset = distance * 0.3;
          
          // Create curved path with multiple points
          var curvePoints = [];
          for (var i = 0; i <= 30; i++) {
            var t = i / 30;
            var lat = loc.lat * (1-t) * (1-t) + midLat * 2 * (1-t) * t + nextLoc.lat * t * t;
            var lng = loc.lng * (1-t) * (1-t) + midLng * 2 * (1-t) * t + nextLoc.lng * t * t;
            
            // Add vertical offset for 3D arc effect
            if (i > 0 && i < 30) {
              lat += offset * Math.sin(t * Math.PI);
            }
            
            curvePoints.push([lat, lng]);
          }
          
          // Gradient effect
          var polyline = L.polyline(curvePoints, {
            color: '#3b82f6',
            weight: 3,
            opacity: isDarkMode ? 0.45 : 0.6,
            smoothFactor: 1,
            lineCap: 'round',
            lineJoin: 'round'
          }).addTo(map);
          
          // Add subtle shadow line for 3D depth
          var shadowLine = L.polyline(curvePoints, {
            color: '#1e40af',
            weight: 5,
            opacity: isDarkMode ? 0.15 : 0.2,
            smoothFactor: 1,
            lineCap: 'round'
          }).addTo(map);
          shadowLine.bringToBack();
        }
      });

      // Perfect view showing all your journey
      setTimeout(function() {
        var bounds = L.latLngBounds(locations.map(function(loc) { 
          return [loc.lat, loc.lng]; 
        }));
        map.fitBounds(bounds, {
          padding: [100, 100],
          maxZoom: 4.5,
          animate: true,
          duration: 0.8
        });
      }, 100);
    
    } catch(error) {
      console.error('[Map Debug] Map initialization error:', error);
      console.error('[Map Debug] Error stack:', error.stack);
      var mapEl = document.getElementById('journey-map');
      if (mapEl) {
        mapEl.innerHTML = '<div style="text-align: center; padding: 2em; opacity: 0.5; font-family: Inter, sans-serif;">' +
                          '<div>Map could not load</div>' +
                          '<div style="font-size: 0.85em; margin-top: 0.5em;">Check console for details</div>' +
                          '</div>';
      }
    }
  }
  
  // Start initialization
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMap);
  } else {
    initMap();
  }
})();

