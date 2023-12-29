# ReactTube - A YouTube-inspired Front-End Project

![ReactTube](link_to_project_image)

## Overview

ReactTube is a front-end project built with the React framework and related technologies, aiming to replicate the user interface and features of YouTube. This project serves as a learning resource and showcases proficiency in React development.

## Features

-   **Responsive Design:** ReactTube is designed to be fully responsive, ensuring a seamless user experience across various devices and screen sizes.

-   **Video Playback:** Users can watch videos with an embedded video player that supports common functionalities such as play, pause, seek, and fullscreen mode.

-   **Video Recommendations:** The homepage provides a curated list of recommended videos based on user preferences and viewing history.

-   **Search Functionality:** Users can search for specific videos using the search bar, with the results dynamically updating as they type.

-   **User Authentication:** ReactTube includes user authentication features, allowing users to create accounts, log in, and personalize their experience.

-   **Like and Comment:** Registered users can like videos and leave comments, fostering community engagement.

-   **Subscription System:** Users can subscribe to channels and receive updates on new videos uploaded by their subscribed channels.

## Technologies Used

-   **React:** A JavaScript library for building user interfaces.

-   **React Router:** Enables navigation and URL handling in a React application.

-   **Redux:** State management library for managing the application's global state.

-   **TailwindCss:** Allows for styling React components.

-   **Firebase:** Used for user authentication, real-time database, and storage.

## APIs and Unique Features Used

-   **YouTube Video API:** For fetching video list of most popular videos.

-   **YouTube Channel API:** For fetching info about video's channel.

-   **iFrame:** For video payback.

-   **useSearchParams Hook:** Used to get query params from url.

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/atom-atharva/ReactTube.git
    ```

2. Install dependencies:

    ```bash
    cd ReactTube
    npm install
    ```

3. Set up Firebase:

    - Create a Firebase project and set up authentication.
    - Update the Firebase configuration in the project.

4. Run the application:

    ```bash
    npm start
    ```

5. Open the app in your browser: [http://localhost:3000](http://localhost:3000)

## Project Structure

```
**Home Page**
    - Header
    - Body
    - Sidebar
        - MenuItems
    - MainContainer
        - ButtonList
            - Button
        - VideoContainer
            - VideoCard
```

```
**Watch Page**
    - Video Frame
```

## Acknowledgments

-   Special thanks to the creators of React, Redux, and other technologies used in this project.

Feel free to fork, modify, and enhance the project! Happy coding! 🚀
