#!/bin/bash
set -e

echo "Node version:"
node --version

echo "NPM version:"
npm --version

echo "Installing dependencies..."
npm install --legacy-peer-deps

echo "Building project..."
npm run build

echo "Build completed successfully!"
