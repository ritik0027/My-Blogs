# Welcome to MyBlog App 📝

MyBlog App is a modern blogging platform built with ReactJS and Tailwind CSS, powered by Appwrite as a backend service for authentication, database, and storage. Users can sign up or log in using their email ID and password, create posts, view all posts, and enjoy a real-time editor powered by TinyMCE.

## Features

- **Authentication**: Secure sign up and login functionality using email and password.
- **Create and View Posts**: Users can create new posts and view all posts on the platform.
- **Real-time Editor**: Enjoy a seamless writing experience with a real-time editor powered by TinyMCE.
- **Responsive Design**: MyBlog App is designed to be responsive across various devices for a seamless user experience.

## Getting Started

To get started with MyBlog App, follow these simple steps:

1. **Clone the Repository**: Clone this repository to your local machine using the following command:

    ```bash
    git clone https://github.com/your-username/My-Blogs-App.git
    ```

2. **Install Dependencies**: Navigate into the cloned directory and install the dependencies using npm:

    ```bash
    cd My-Blogs-App
    npm install
    ```

3. **Configuration**: Set up Appwrite backend service and configure environment variables. Follow the steps below:

    - Sign up for an account on [Appwrite](https://appwrite.io/).
    - Create a new project and note down the project ID and API endpoint.
    - Rename `.env.sample` to `.env` and update the following variables with your Appwrite project details:
        ```
        VITE_APPWRITE_APPWRITE_ENDPOINT=your-appwrite-endpoint
        VITE_APPWRITE_APPWRITE_PROJECT_ID=your-appwrite-project-id
        VITE_APPWRITE_DATABASE_ID=your-appwrite-database-id
        VITE_APPWRITE_COLLECTION_ID=your-appwrite-collection-id
        VITE_APPWRITE_BUCKET_ID=your-appwrite-bucket-id
        ```

4. **Run the Application**: Once dependencies are installed and configuration is done, you can run the application locally using npm:

    ```bash
    npm run dev
    ```

5. **Access the Application**: Open your web browser and navigate to `http://localhost` to access MyBlog App.

## Dependencies

MyBlog App relies on the following major dependencies:

- **ReactJS**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for designing custom web interfaces.
- **Appwrite SDK**: The official JavaScript SDK for interacting with the Appwrite backend service.
- **TinyMCE**: A rich text editor for web-based content creation.

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your fork.
5. Submit a pull request to the main repository.

## Feedback and Support

If you have any feedback, suggestions, or issues with MyBlog App, feel free to open an issue on GitHub. We appreciate your feedback and will do our best to address any concerns promptly.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code for your own purposes.

---

Thank you for using MyBlog App! We hope you find it useful for sharing your thoughts and stories. If you have any questions or need assistance, don't hesitate to reach out. Happy blogging! 🚀
