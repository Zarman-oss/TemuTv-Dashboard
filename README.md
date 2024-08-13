`# TemuTv Dashboard 

## Overview

**TemuTv Dashboard** is a tool designed for developers to monitor and manage subscriptions. The dashboard provides insights into subscription data, user metrics, and other relevant information.

## Features

- **Subscription Overview**: View and manage all active and inactive subscriptions.
- **User Metrics**: Track user engagement and subscription trends.
- **Real-Time Updates**: Get instant updates on subscription changes.

## Getting Started

### Prerequisites

- **Node.js** (v14 or higher)
- **Bun**
- **Next.js** (v14)
- **Tailwind CSS**
- **@headlessui/react**
- **lucide-react**

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/username/temutv-dashboard.git
   cd temutv-dashboard `

1.  **Install Dependencies**:

    bash

    Copy code

    `bun install`

2.  **Environment Variables**:

    Create a `.env.local` file in the root directory and add the following environment variables:

    bash

    Copy code

    `NEXT_PUBLIC_API_URL=your_api_url_here
    NEXT_PUBLIC_API_KEY=your_api_key_here`

3.  **Start the Development Server**:

    bash

    Copy code

    `bun dev`

4.  **Build for Production**:

    bash

    Copy code

    `bun build`

Usage
-----

### Viewing Subscriptions

The main feature of the TemuTv Dashboard is to view and manage subscriptions:

-   Navigate to the **Subscriptions** tab to see a list of all subscriptions.
-   Use filters to sort subscriptions by status, date, or user.
-   Click on any subscription to view detailed information.

### User Metrics

-   Access the **Metrics** tab to see detailed analytics on user subscriptions.
-   Use the available charts and graphs to monitor trends and user engagement.
