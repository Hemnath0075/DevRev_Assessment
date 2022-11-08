import React, { useRef, useState } from "react";
import { useEffect } from "react";
import Image from "../../Assets/Book_Cover_Mockup.jpg";

function Home() {
  const inputref=useRef();
  var datacount=1
  const [moreData, setMoreData] = useState(datacount);
  const scrollIsAtEnd = () => {
    setMoreData(moreData + 1);
  };
  window.onscroll = () => {
    if (
      document.documentElement.scrollTop +
        document.documentElement.offsetHeight ===
      document.documentElement.scrollHeight
    ) {
      scrollIsAtEnd();
    }
  };
  console.log(moreData); 

  
  var dateobj="2022-11-08T14:24:28.468Z"
  console.log(dateobj);
  const [data,setData]=useState([{
    Title: "Book1",
    Author: "Shakeshpere",
    Subject: "Novel",
    PublishDate: dateobj,
  },
  {
    Title: "Book2",
    Author: "Shakeshpere",
    Subject: "Novel",
    PublishDate: dateobj,
  },
  {
    Title: "Book3",
    Author: "Shakeshpere",
    Subject: "Novel",
    PublishDate: dateobj,
  },
  {
    Title: "Book4",
    Author: "Shakeshpere",
    Subject: "Novel",
    PublishDate: dateobj,
  },
  {
    Title: "Book5",
    Author: "Shakeshpere",
    Subject: "Novel",
    PublishDate: dateobj,
  },
  {
    Title: "Book6",
    Author: "Shakeshpere",
    Subject: "Novel",
    PublishDate: dateobj,
  },
  {
    Title: "Book7",
    Author: "Shakeshpere",
    Subject: "Novel",
    PublishDate: dateobj,
  },
  {
    Title: "Book8",
    Author: "Shakeshpere",
    Subject: "Novel",
    PublishDate: dateobj,
  },
  {
    Title: "Book9",
    Author: "Shakeshpere",
    Subject: "Novel",
    PublishDate: dateobj,
  },
  {
    Title: "Book10",
    Author: "Shakeshpere",
    Subject: "Novel",
    PublishDate: dateobj,
  }])
  const data2=[
    {
      Title: "Book11",
      Author: "Shakeshpere",
      Subject: "Novel",
      PublishDate: dateobj,
    },{
      Title: "Book12",
      Author: "Shakeshpere",
      Subject: "Novel",
      PublishDate: dateobj,
    },{
      Title: "Book13",
      Author: "Shakeshpere",
      Subject: "Novel",
      PublishDate: dateobj,
    },{
      Title: "Book14",
      Author: "Shakeshpere",
      Subject: "Novel",
      PublishDate: dateobj,
    },{
      Title: "Book15",
      Author: "Shakeshpere",
      Subject: "Novel",
      PublishDate: dateobj,
    },
  ]
  useEffect(()=>{
    if(moreData>1){
    setData([...data,...data2])
    console.log(data)
    }
  },[moreData])

  const handleSubmit =(e)=>{
    e.preventDefault()
    console.log(inputref.current.value)
    data.filter
  }
  return (
    <div className="h-screen w-full bg-black">
      <h1 className="text-4xl text-white flex w-full justify-center pt-8">
        Library Management
      </h1>
      <div className="">
        <h1 className="text-4xl text-white flex w-full justify-start pt-8 pl-4">
          List of Books In Library :{" "}
        </h1>
        <form onSubmit={handleSubmit} className="mt-4">
          <input type="text" className="px-4 p-2 ml-8" ref={inputref}/>
          <button type="submit" className="px-4 p-2 ml-8 bg-white">Search</button>
        </form>
        <div className="flex flex-row gap-8 justify-start p-10 mt-1 flex-wrap h-full bg-black">
          {data.map((item) => (
            <div className="h-56 bg-white flex flex-row items-center gap-4">
              <img src={Image} alt="" className="h-full w-40" />
              <div className="flex justify-start flex-col ">
                <p className="text-lg">Title:{item.Title}</p>
                <p className="text-lg">Author:{item.Author}</p>
                <p className="text-lg">Subject:{item.Subject}</p>
                <p className="text-lg">Publish Date:{new Date(item.PublishDate).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
