# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


````
<html>
<head>
    <title>Profile Page</title>
    <script src="https://unpkg.com/react/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.js"></script>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
    <style>
        body {
            background-color: #000;
            color: #fff;
            font-family: Arial, sans-serif;
        }
        .profile-pic {
            width: 80px;
            height: 80px;
            border-radius: 50%;
        }
        .post-image {
            width: 100%;
            height: auto;
        }
        .icon {
            font-size: 1.5rem;
        }
    </style>
</head>
<body>
    <div id="root"></div>
    <script type="text/babel">
        function App() {
            return (
                <div className="p-4">
                    <div className="flex justify-between items-center mb-4">
                        <div className="text-sm">10:22</div>
                        <div className="flex items-center space-x-1 text-sm">
                            <i className="fas fa-signal"></i>
                            <i className="fas fa-wifi"></i>
                            <i className="fas fa-battery-half"></i>
                            <div>59%</div>
                        </div>
                    </div>
                    <div className="flex items-center mb-4">
                        <img src="https://placehold.co/80x80" alt="Profile picture of the user" className="profile-pic mr-4" />
                        <div>
                            <div className="text-lg font-bold">officegautam_kurrey <i className="fas fa-caret-down"></i></div>
                            <div className="text-sm text-gray-400">Gautam Kurre</div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                        <div className="text-center">
                            <div className="text-lg font-bold">69</div>
                            <div className="text-sm text-gray-400">posts</div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg font-bold">105</div>
                            <div className="text-sm text-gray-400">followers</div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg font-bold">6</div>
                            <div className="text-sm text-gray-400">following</div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <div className="text-sm">@officegautam_kurrey</div>
                        <a href="https://www.sites.google.com/view/adunicorn/home" className="text-blue-500 text-sm">www.sites.google.com/view/adunicorn/home</a>
                    </div>
                    <div className="bg-gray-800 p-2 rounded mb-4">
                        <div className="text-sm">Professional dashboard</div>
                        <div className="text-xs text-gray-400">11K views in the last 30 days.</div>
                    </div>
                    <div className="flex justify-between mb-4">
                        <button className="bg-gray-800 text-white py-1 px-4 rounded">Edit profile</button>
                        <button className="bg-gray-800 text-white py-1 px-4 rounded">Share profile</button>
                    </div>
                    <div className="flex justify-around mb-4">
                        <i className="fas fa-th-large icon"></i>
                        <i className="fas fa-play-circle icon"></i>
                        <i className="fas fa-user-circle icon"></i>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                        <img src="https://placehold.co/150x150" alt="Post image 1" className="post-image" />
                        <img src="https://placehold.co/150x150" alt="Post image 2" className="post-image" />
                        <img src="https://placehold.co/150x150" alt="Post image 3" className="post-image" />
                        <img src="https://placehold.co/150x150" alt="Post image 4" className="post-image" />
                        <img src="https://placehold.co/150x150" alt="Post image 5" className="post-image" />
                        <img src="https://placehold.co/150x150" alt="Post image 6" className="post-image" />
                        <img src="https://placehold.co/150x150" alt="Post image 7" className="post-image" />
                        <img src="https://placehold.co/150x150" alt="Post image 8" className="post-image" />
                        <img src="https://placehold.co/150x150" alt="Post image 9" className="post-image" />
                    </div>
                </div>
            );
        }

        ReactDOM.render(<App />, document.getElementById('root'));
    </script>
</body>
</html>
````