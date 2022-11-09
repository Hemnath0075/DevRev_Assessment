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
  const [count,setCount]=useState(false)
  const [search,setSearch]=useState(false)
  const [searchData,setSearchData]=useState(null)
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
    Author: "kalki",
    Subject: "Novel",
    PublishDate: dateobj,
  },
  {
    Title: "Book3",
    Author: "jayagathan",
    Subject: "Novel",
    PublishDate: dateobj,
  },
  {
    Title: "Book4",
    Author: "BalaKumaran",
    Subject: "Novel",
    PublishDate: dateobj,
  },
  {
    Title: "Book5",
    Author: "GV",
    Subject: "Novel",
    PublishDate: dateobj,
  },
  {
    Title: "Book6",
    Author: "sujatha",
    Subject: "Novel",
    PublishDate: dateobj,
  },
  {
    Title: "Book7",
    Author: "viyasar",
    Subject: "Novel",
    PublishDate: dateobj,
  },
  {
    Title: "Book8",
    Author: "villiputhurar",
    Subject: "Novel",
    PublishDate: dateobj,
  },
  {
    Title: "Book9",
    Author: "Shakeshpere",
    Subject: "biography",
    PublishDate: dateobj,
  },
  {
    Title: "Book10",
    Author: "Shakeshpere",
    Subject: "epics",
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
      Subject: "Fiction",
      PublishDate: dateobj,
    },{
      Title: "Book13",
      Author: "Shakeshpere",
      Subject: "literature",
      PublishDate: dateobj,
    },{
      Title: "Book14",
      Author: "Shakeshpere",
      Subject: "fiction",
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
    // console.log(inputref.current.value)
    // data.filter
  }
  const handleSearchTitle=(e)=>{
    e.preventDefault()
    setCount(true)
    setSearch(true)
    console.log(inputref.current.value)
    console.log(data)
    const result = data.filter((item)=>{
        console.log(item.Title.toLocaleLowerCase())
        if(item.Title.toLocaleLowerCase().includes(inputref.current.value)){
          return item;
        }
    })
    console.log(result.length)
    if(result.length>0)
      setSearchData([...result])
    else  setSearchData([])
  }
  const handleSearchAuthor=(e)=>{
    e.preventDefault()
    setCount(true)
    setSearch(true)
    console.log(inputref.current.value)
    console.log(data)
    const result = data.filter((item)=>{
        console.log(item.Title.toLocaleLowerCase())
        if(item.Author.toLocaleLowerCase().includes(inputref.current.value)){
          return item;
        }
    })
    console.log(result.length)
    if(result.length>0)
      setSearchData([...result])
    else  setSearchData([])
  }
  const handleSearchSubject=(e)=>{
    e.preventDefault()
    setCount(true)
    setSearch(true)
    console.log(inputref.current.value)
    console.log(data)
    const result = data.filter((item)=>{
        console.log(item.Title.toLocaleLowerCase())
        if(item.Subject.toLocaleLowerCase().includes(inputref.current.value)){
          return item;
        }
    })
    console.log(result.length)
    if(result.length>0)
      setSearchData([...result])
    else  setSearchData([])
  }
  const handleQuitSearch = (e)=>{
    e.preventDefault()
    setCount(false);
    setSearch(false);
    setSearchData([])
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
          <button type="submit" onClick={handleSearchTitle} className="px-4 p-2 ml-8 bg-white">SearchByTitle</button>
          <button type="submit" onClick={handleSearchAuthor} className="px-4 p-2 ml-8 bg-white">SearchByAuthor</button>
          <button type="submit" onClick={handleSearchSubject} className="px-4 p-2 ml-8 bg-white">SearchBySubject</button>
          <button type="submit" onClick={handleQuitSearch} className="px-4 p-2 ml-8 bg-white">Quit Search</button>
        </form>
        {count && (<p className="text-xl text-white ml-8">Number of Items:  {searchData.length}</p>)}
        <div className="flex flex-row gap-8 justify-start p-10 mt-1 flex-wrap h-full bg-black">
          {!search && data.map((item) => (
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
          {search && searchData.map((item) => (
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
