#!/bin/bash

# Jekyll Development Server Startup Script

export PATH="$HOME/.gem/ruby/2.6.0/bin:$PATH"
export LC_ALL=en_US.UTF-8
export LANG=en_US.UTF-8

echo "Starting Jekyll server..."
echo "Server will be available at http://localhost:4000"
echo "Press Ctrl+C to stop the server"
echo ""

bundle exec jekyll serve

