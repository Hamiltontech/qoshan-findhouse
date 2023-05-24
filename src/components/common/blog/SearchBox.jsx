const SearchBox = ({keyword, setKeyword}) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    setKeyword(event.target.value)
    
  };



  return (
    <form onClick={handleSubmit} >
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="أدخل كلمة البحث"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          required
          onChange={handleSubmit}
        />
        <div className="input-group-append">
          {/* <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            <span className="flaticon-magnifying-glass"></span>
          </button> */}
        </div>
      </div>
    </form>
  );
};

export default SearchBox;
