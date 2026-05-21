# Week 6 Assignments: React & State Management

This folder contains advanced React projects focusing on component communication, state management using Context API, and modular application architecture.

## Projects Overview

### 1. Blogger Project
A modular blog template demonstrating component-based architecture.
- **Header**: Responsive navigation bar.
- **Content**: Dynamic article rendering area with fallbacks.
- **Footer**: Professional multi-column footer with social links.
- **Styling**: Uses Tailwind CSS for a modern, responsive design.

### 2. editCounter (Context API)
A state management demonstration where multiple independent components share a single source of truth.
- **Context Provider**: Manages global `trackerValue` and shared functions.
- **Multiple Counters**: Components (`EditCounter1` to `EditCounter4`) all reflecting and updating the same global state.
- **Real-time Synchronization**: Demonstrates the power of React Context in avoiding "prop drilling".

### 3. Employee Management
An interactive dashboard for managing employee data.
- **CRUD Operations**: Add, Edit, and Delete employee records.
- **State Flow**: Demonstrates complex state lifting and list management in React.

## Key Enhancements
- **State Management**: Implemented Context API to handle shared state across disconnected components.
- **Code Modularity**: Refactored monolithic components into smaller, reusable UI blocks.
- **Tailwind CSS**: Standardized styling across all projects using a cohesive color system (Indigo, Rose, Slate).
- **ES6+ Best Practices**: Used destructuring, arrow functions, and modern hook patterns (e.g., `useContext`).

# Deployment link:-
https://atp-24-eg-109-a06-jjwv8fbtx-spak-09s-projects.vercel.app