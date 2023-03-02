import { useState } from "react";

const EditProfileInfo = () => {
  const [isAutoCompleteOpen, setIsAutoCompleteAuto] = useState(false);
  const [isSingleChecked, setIsSingleChecked] = useState(false);
  const [isMarriedChecked, setIsMarriedChecked] = useState(false);
  const [isHouseKeeprChecked, setIsHouseKeeperChecked] = useState(false);
  const [isEmployedChecked, setIsEmployedChecked] = useState(false);

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
          <input
            type="radio"
            id="single"
            name="single"
            value="single"
            checked={isSingleChecked}
            onClick={() => setIsSingleChecked(!isSingleChecked)}
          />
          <label htmlFor="single">مجرد</label>
        </div>
        <div>
          <input
            type="radio"
            id="married"
            name="married"
            value="married"
            checked={isMarriedChecked}
            onClick={() => setIsMarriedChecked(!isMarriedChecked)}
          />
          <label htmlFor="single">متاهل</label>
        </div>
        <div>
          <input
            type="radio"
            id="housewife"
            name="housewife"
            value="housewife"
            checked={isHouseKeeprChecked}
            onClick={() => setIsHouseKeeperChecked(!isHouseKeeprChecked)}
          />
          <label htmlFor="housewife">خانه دار</label>
        </div>
        <div>
          <input
            type="radio"
            id="employed"
            name="employed"
            value="employed"
            checked={isEmployedChecked}
            onClick={() => setIsEmployedChecked(!isEmployedChecked)}
          />
          <label htmlFor="employed">شاغل</label>
        </div>
      </div>
      <div>
        <button type="submit">تغییر اطلاعات</button>
      </div>
    </div>
  );
};

export default EditProfileInfo;
