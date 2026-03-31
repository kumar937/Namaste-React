#Netflix-GPT

we have created a folder and npx creat-react-app netflix-gpt
I have setup tailwind by going through https://tailwindcss.com/docs/installation/framework-guides
-Routing
-Header 
-Login Form
-Form validations
-Firebase
-SignUp,SignIn,SignOut APIs
-Routing
-Created Redux store with user slice
-Update Profile
-Bugfix Sign-in/SignUp profile and name display issue
-Bugfix redirect to Loginpage/browse when user not signed/ user signed in
-Unsubscribing to the onAuthstatechanged callback
-declared constants for Hardcoded values
-Created movie trailer and movie details section
-Created custom hook to get movie trailer and store in redux store
-Align movietrailer and movie details 
-Created secondary container
-Created movie list
-Created movie card
-Figured out TMDB movie APIs
-Add a Gpt Search/Home page toggle button in browse page
-Designed Gpt search page
-Design Gpt search page for multi lang
-Added search bar
-Added multi langual feature for search page
-Added and initialized Gemini AI 
-Implemented movie recommendations using Gemini
-Displayed AI movie sugesstions below the search bar by getting movie details from TMDB
-Added AI suggested movie list and movie details into redux store
-Secured API keys using env file
-Applied Memoization to reduce api calls on tab switches
-Made the app Responsive for mobile and desktop
-Displaying Movie trailer on select of movie 

#Features
-Login/Sign-up
    -Sign-In/Sign Up form
    -redirect to Browser page
-Browse(after login or sign up)
    -Header
    -Primary componenet
        -Trailer as Background
        -Tile and description
    -Secondary component
        -Movie list * n
           -list name
           -Moviecards *

-NetflixGPT
    -search bar
    -Movie Suggestions
