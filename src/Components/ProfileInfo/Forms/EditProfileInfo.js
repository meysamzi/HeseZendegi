import { useState } from "react";

const EditProfileInfo = () => {
  const [isAutoCompleteOpen, setIsAutoCompleteAuto] = useState(false);

  const regions = ["تهران", "کرج", "تبریز"];

  return (
    <div className="editProfileInfoRoot">
      <input type={"text"} placeholder={"نام"} />
      <input type={"text"} placeholder={"تاریخ تولد"} />
      <div className="autoComplete">
        <input
          type={"text"}
          placeholder={"استان"}
          onClick={() => setIsAutoCompleteAuto(!isAutoCompleteOpen)}
        />
        <ul
          className="autoCompleteData"
          style={{
            display: isAutoCompleteOpen ? "flex" : "none",
          }}
        >
          {regions?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="radioButtonsGroup">
        <div>
          <input type="radio" id="single" name="single" value="single" />
          <label for="single">مجرد</label>
        </div>
        <div>
          <input type="radio" id="married" name="married" value="married" />
          <label for="single">متاهل</label>
        </div>
        <div>
          <input
            type="radio"
            id="housewife"
            name="housewife"
            value="housewife"
          />
          <label for="housewife">خانه دار</label>
        </div>
        <div>
          <input type="radio" id="employed" name="employed" value="employed" />
          <label for="employed">شاغل</label>
        </div>
      </div>
    </div>
  );
};

export default EditProfileInfo;
