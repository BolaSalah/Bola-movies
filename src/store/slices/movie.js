import { createAsyncThunk, createSlice}  from "@reduxjs/toolkit";
import instance from '../../axiosConfig/instance';

export const moviesAction = createAsyncThunk('movies/getAll', async (params) => {
  console.log({params});
  const res = await instance.get("movie/popular",  {params} );
  return res.data.results;
});


 const moviesSlice = createSlice({
    name: "movies",
    initialState: { movies: [] },
    extraReducers: (bulider) => {
        bulider.addCase(moviesAction.fulfilled, (state, action) => {
          state.movies = action.payload;
        });
    }
 });

 export default moviesSlice.reducer;