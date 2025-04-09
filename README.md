# Tabs Switcher Project

![Project Screenshot](./image.png)

## Overview

This React application is a job experience tabs switcher that displays different job positions and their details. Users can switch between different job entries to view the corresponding responsibilities and details.

## Figma URL

[Tabs](https://www.figma.com/file/FJC19b9eUWS62HKR8L9Dmn/Tabs?node-id=0%3A1&t=8Rio02EFK1r9ItDW-1)

## Features

- Fetches job data from an API endpoint

- Displays job information in a clean, organized layout

- Responsive design that adapts to different screen sizes

- Interactive tabs for switching between different job entries

- Loading state while data is being fetched

- Modern UI with custom styling and icons

## Technologies Used

- React (Functional components with Hooks)

- CSS (Custom properties and responsive design)

- React Icons (FaAngleDoubleRight from react-icons/fa)

- UUID (For generating unique keys)

## Installation

1. Clone the repository

   ```bash

   git clone https://github.com/your-username/tabs-switcher.git

   ```

2. Navigate to the project directory

   ```bash

   cd tabs-switcher

   ```

3. Install dependencies

   ```bash

   npm install

   ```

4. Start the development server

   ```bash

   npm run dev

   ```

## Usage

1. The application will automatically fetch job data on load

2. Click on the company names in the left panel (or top panel on mobile) to switch between different job entries

3. View the corresponding job details including:

   - Job title

   - Company name

   - Dates of employment

   - List of duties

## API Endpoint

The application fetches data from:

```

https://www.course-api.com/react-tabs-project

```

## Customization

You can customize the styling by modifying the CSS variables in `index.css`. The color scheme is based on a primary teal color and various grey shades.

## Responsive Design

The layout adapts to different screen sizes:

- On mobile: Tabs are displayed horizontally at the top

- On desktop (992px and above): Tabs move to a vertical layout on the left side
