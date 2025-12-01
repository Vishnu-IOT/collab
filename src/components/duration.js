import React, { useState } from 'react'
import BasicDateCalendar from './date'
import '../styles/durationstyle.css';
import rasiname from '../json/rasipalan.json'
// import star from '../json/star.json'
import AntDatePicker from './antdatepicker';
// import Error from './error';

const Duration = () => {
    const [values, setValue] = useState();
    const [dur, setdur] = useState("Daily");
    const [selectobj, setSelectedObj] = useState("");
    const [object, setobject] = useState("மேஷம்");
    // const [error, seterror] = useState([]);
    // const [nat, setnat] = useState();
    // const [det, setdet] = useState("");

    const handleChange = (e) => {
        const selectedName = e.target.value;
        const match = rasiname.find(item => item.name === selectedName);
        if (!match) {
            setSelectedObj(null);
            return;
        }
        setSelectedObj(match.rasiId);
        setobject(selectedName);
        console.log("selected rasiId:", selectobj);
        console.log("selected rasiname:", object);

    };

    // const compare = star.find(item => item.name === object);
    // const natcha = compare.natchathiram;
    // console.log(compare.natchathiram);

    // useEffect(() => {
    //     if (natcha) {
    //         setnat(
    //             natcha.map((item) => ({
    //                 ...item,
    //                 details: det,
    //             }))
    //         );
    //     }
    // }, [natcha, det]);


    const xchange = async (e) => {

        e.preventDefault();
        const formdata = new FormData();
        formdata.append("date", values)
        formdata.append("rasiId", selectobj)
        formdata.append("name", e.target.rasi.value)
        formdata.append("summary", e.target.summary.value)
        formdata.append("luckyNumbers", e.target.luckyNumbers.value)
        formdata.append("lucky_dr", e.target.lucky_dr.value)
        formdata.append("lucky_color", e.target.lucky_color.value)
        formdata.append("duration", dur)
        formdata.append("image", e.target.image.files[0])
        // formdata.append("natchathiram",nat)

        console.log(formdata)

        await fetch("https://tnreaders.in/mobile/rasi-daily-store", {
            method: "POST",
            body: formdata
        })
            .then((res) => res.json())
            .then((data) => { if (!data.success) { alert(data.message) }; console.log(data) });
    }


    return (
        <div className='main'>
            <form className='form' onSubmit={xchange} encType="multipart/form-data">
                <h1>Upload-Form</h1>

                <label>கால அளவைத் தேர்வு செய்க:</label>
                <select className='design' onChange={(e) => { setdur(e.target.value); }} required>
                    <option>Daily</option>
                    <option>Weekly</option>
                    <option>Monthly</option>
                    <option>Yearly</option>
                </select>

                <label>தேதி:</label>
                {dur === "Daily" &&
                    <BasicDateCalendar onformat={"YYYY-MM-DD"} onDate={setValue} />}
                {dur === "Weekly" &&
                    <div className="custom-week-picker">
                        <AntDatePicker onDate={setValue} />
                    </div>

                }
                {dur === "Monthly" &&
                    <BasicDateCalendar onformat={"MMM-YYYY"} onDate={setValue} onview={["year", "month"]} onopen={"month"} />}
                {dur === "Yearly" &&
                    <BasicDateCalendar onformat={"YYYY"} onDate={setValue} onview={["year"]} onopen={"year"} />}

                <label>ராசி பெயர்:</label>
                <select className='design' name="rasi" onChange={handleChange} required>
                    <option></option>
                    {rasiname.map((item) => (
                        <option key={item.rasiId} value={item.name}>
                            {item.name}
                        </option>
                    ))}
                </select>
                {/* {
                    natcha.map((key, index) => {
                        return (
                            <>
                                <select className='design' key={index}>
                                    <option key={index}>{key.star}</option>
                                </select>
                                <input className='design' type='text' name='details' placeholder='விவரங்கள்/விபரங்கள்' onChange={(e) => setdet(e.target.value)} required />
                            </>);
                    })
                } */}

                <label>சுருக்கம்:</label>
                <textarea className='tadesign' type='text' name='summary' placeholder='சுருக்கம்' required />
                <label>அதிர்ஷ்ட எண்:</label>
                <input className='design' type='text' name='luckyNumbers' placeholder='அதிர்ஷ்ட எண்' required />
                <label>அதிர்ஷ்ட நிறம்:</label>
                <input className='design' type='text' name='lucky_color' placeholder='அதிர்ஷ்ட நிறம்' required />
                <label>அதிர்ஷ்ட திசை:</label>
                <input className='design' type='text' name='lucky_dr' placeholder='அதிர்ஷ்ட திசை' required />
                <label>Upload Image:</label>
                <input className='design' type='file' name='image' accept="image/*" placeholder='Upload Image only' required />

                <button className='btn'>Upload</button>
            </form>
        </div >
    )
}

export default Duration
