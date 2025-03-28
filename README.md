# YouTube Clone
A YouTube clone application built using **Laravel 12** for the backend and **React** for the frontend. This project replicates core YouTube features such as video uploading, streaming, commenting, and more.

## Features
- User authentication (registration, login, logout)
- Video upload and streaming
- Like, dislike, and comment on videos
- Search functionality
- User profiles and video management

---

## Prerequisites
Before you begin, ensure you have the following installed on your system:
- PHP >= 8.1
- Composer
- Node.js >= 16.x
- npm or yarn
- MySQL or any other database supported by Laravel
- Git

---

## Installation

### 1. Clone the Repository

To get started with the YouTube clone application, follow the steps below:

1. Open your terminal or command prompt.
2. Navigate to the directory where you want to clone the repository.
3. Run the following command to clone the repository:

```shell
git clone https://github.com/ajaydhakal1/yt-clone.git
```

4. Once the repository is cloned, navigate to the project directory:

```shell
cd yt-clone
```

5. Install the project dependencies by running the following command:

```shell
composer install
```

6. Next, install the frontend dependencies:

```shell
npm install
```

7. Create a copy of the `.env.example` file and rename it to `.env`. Update the database configuration in the `.env` file with your own database credentials.

8. Generate an application key by running the following command:

```shell
php artisan key:generate
```

9. Run the database migrations to create the necessary tables:

```shell
php artisan migrate
```

10. Finally, start the development server:

```shell
php artisan serve
```

11. Open your web browser and visit `http://localhost:8000` to access the YouTube clone application.

That's it! You have successfully installed and set up the YouTube clone application. Enjoy exploring its features and building upon it!

