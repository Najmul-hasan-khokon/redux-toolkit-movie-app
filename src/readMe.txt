redux toolkit e jeta niye kaj korbo sei name onusare file nibo
// for example product niye kaj korle productSlice.js hobe.

then er vitore createSlice() function call korbo eta peramiter e 
ekta object ney then er vitore 4ta jinish dite hobe 
 1: name: 'anything'
 2: initialState,
 3: reducers : {} // er vitore action likbo.
 4: extraReducers: {} // createAsyncThunk theke je action gula pabo ekhane update korbo.

// asynchronous kono action gotale extraReducers nite hobe.




createAsyncThunk() 2ta peramiter ney
1: 'somethig',  // convension task name and action creators name dibo.
2: async()=> {}    // ekta callBack function jekhane fetch releted kaj korbo.
                      kore setake return kore dibo.





summery
___________
useeffect e dispatch call kore dispatch er peramiter e createAsyncThunk call
korle server theke data fetch hobe then jeheto dispatch call korci
createSlice er vitore giye extraReducers e jodi createAsyncThunk.fulfilled
hoy tahole state update hobe orthad fetch kore jeta paici seta state e rekhe dibo then jekhane use kora dorkar use kore pelbo.

/ createAsyncThunk diye data fetch kore createSlice er 4number peramiter orthad
extraReducers e createAsyncThunk er [variable.pending] or [variable.rejected]
or [variable.fulfilled] : (state, {payLoad})=>{return {...state, initialState's property : payLoad}}


// note : rejected and pending na dileo prblm nai.



last e state clean o kore dite pari.






react-slick ba carousel
_________________________
react-slick theke ekta Slider component pabo seta diye jetar upore carousel dibo
setake just slider diye wrap kore dibo and ekta props akare ekta settings diye dibo.

css style er jonno cdn link add kore nibo. ba custom css o dite pari.


