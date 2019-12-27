# Real state application

## Setup
In order to setup this project you have to do some configurations on the `.env` files:
- Backend: 
    1. `cd backend/`
    2. Go to the `.env` file and replace the `MONGO_URI` value to your `MongoDB` URI
    3. Run `yarn install`
    4. Run `yarn run start`
    5. To run the tests use `yarn test`
    
- Frontend: 
    1. `cd frontend/`
    2. Go to the `.env` file and replace `REACT_APP_ENDPOINT` with your backend full URL (make sure to set the value without the last slash, e.g `http://localhost:8001` not `http://localhost:8001/`)
    3. Run `yarn install`
    4. Run `yarn run start`