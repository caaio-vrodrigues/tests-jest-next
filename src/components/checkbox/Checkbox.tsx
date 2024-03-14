
export const Checkbox = () => 
  <div className={`flex flex-col border border-white p-3`}>
    <div>
      <label htmlFor="inp1">Blue</label>
      <input name="inp1" type="checkbox"
      className={`cursor-pointer ml-1`}/>
    </div>

    <div>
      <label htmlFor="inp2">Green</label>
      <input name="inp2" type="checkbox"
      className={`cursor-pointer ml-1`}/>
    </div>

    <div>
      <label htmlFor="inp3">purple</label>
      <input name="inp3" type="checkbox"
      className={`cursor-pointer ml-1`}/>
    </div>
  </div>