# Markdown Previewer

## Overview
A live Markdown editor built with React that shows real-time HTML output as you type.

## Technologies Used
- React
- JavaScript
- Marked.js
- CSS Modules

## Features
- Real-time Markdown to HTML rendering
- Preloaded with sample markdown syntax
- Split-pane layout for editing and preview

## Purpose
To explore React state, one-way data flow, and third-party library integration while learning Markdown formatting.

## Status
Fully functional and deployed. Built as part of a front-end certification project.

### Security Note
This project uses `dangerouslySetInnerHTML` to render HTML converted from markdown. While this is necessary for live HTML previews in React, it can be a security risk if not handled carefully — especially with untrusted input.

In production apps, using `dangerouslySetInnerHTML` without sanitizing the content could expose the app to XSS (Cross-Site Scripting) attacks.

A safer approach is to use a library like [`DOMPurify`](https://github.com/cure53/DOMPurify) to sanitize the HTML before rendering it, or to use a markdown parser that sanitizes content by default.
