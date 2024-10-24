import React,{useEffect, useState} from 'react'
import closebtn from './Images/closebtn.png'
import AdminSideBar from './AdminSideBar'
import AdminTopbar from './AdminTopbar'
import loader from './../components/Images/loader.png'
import './css/admin.scss'
import jsPDF from "jspdf";
import "jspdf-autotable";
import { format } from "date-fns";

import DataTable from 'react-data-table-component'
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiEye } from "react-icons/hi2";

import csv from "./Images/csv.svg";
import pdf from "./Images/pdf.svg";
import exclamation from "./Images/exclamation.svg";
import success from "./Images/success.svg";
import error from "./Images/error.svg";
import loadergif from "./Images/loader.gif";
import { useAuth } from '../store/auth'; 
import { toast } from "react-toastify";  
import { useNavigate } from 'react-router-dom'


const AdminSubChildCategory = () => {
	const[showloader,Setshowloader] = useState(true);     //loading effect
	const Pageheading = 'Subchild Categories';
	const Pagesubheading = 'Home / Subchild Categories';

	const [images, setImages] = useState([]);
	const [preview, setPreview] = useState([]);
	const { authorizationToken, ADMINAPI } = useAuth();   
	const[allrecords,setAllRecords] = useState([]);
	const[records,setRecords] = useState([]);
	const[categorydata,setcategorydata] = useState([]);
	const[subcategorydata,setsubcategorydata] = useState([]);
	const[childcategorydata,setchildcategorydata] = useState([]);
	const[getallcategory,setgetallcategory] = useState([]);
	const[viewdata,Setviewdata] = useState([]);
	const[getallsubcategory,setallsubcategory] = useState([]);
	const[getallchildcategory,setallchildcategory] = useState([]);
	const[multiimagedata,setmultiimagedata] = useState([]);
	//const[getallsubcat,setgetallsubcat] = useState([]);
	const[loader,setLoader] = useState(false);
	const[datatblloader,setdatatblloader] = useState(true);
	const[popupwait,setpopupwait] = useState(false);
	const[popupsuccess,setpopupsuccess] = useState(false);
	const[popuperror,setpopuperror] = useState(false);
	const[responseheading,setresponseheading] = useState('');
	const[responsemsg,setresponsemsg] = useState('');
	const[resultedit,setResultedit] = useState('');
	const[editid,Seteditid] = useState('');
	const[deleteid,SetDeleteid] = useState('');
	const [fromDate, setFromDate] = useState('');
	const [toDate, setToDate] = useState('');
	const[search, setSearch] = useState('');
	const[catFilter,setCatFilter] = useState([]);
	const[subCatFilter,setSubCatFilter] = useState([]);
	const[childCatFilter,setChildCatFilter] = useState([]);
 //const[chk,setchk]=useState([])
	

	//const navigate = useNavigate();
	useEffect(()=>{ getAllCategory();  getAllRecords(); },[]);
	
	const getAllRecords = async ()=>
	{
		try 
		{
			const response = await fetch(`${ADMINAPI}/getallsubchildcategory`,{
				method:"GET",
				headers:{
							'Content-Type': 'application/json',
							Authorization : authorizationToken 
						}
			  });
		
			 const data = await response.json();
			 if(data.length === "" || data.length === 0 || data.length === null || data.length === undefined)
			 {
				setRecords(data);
				setAllRecords(data);
				setdatatblloader(false);
			 	//console.log(data);
			 }
			 else
			 {
				const response2 = await fetch(`${ADMINAPI}/getallcategory`,{
					method:"GET",
					headers:{
							'Content-Type': 'application/json',
							Authorization : authorizationToken 
						}
				  });
				const data2 = await response2.json();
				setCatFilter(data2);
	
				const response3 = await fetch(`${ADMINAPI}/getallsubcategory`,{
					method:"GET",
					headers:{
							'Content-Type': 'application/json',
							Authorization : authorizationToken 
						}
				  });
				const data3 = await response3.json();
				setSubCatFilter(data3);


				const response4 = await fetch(`${ADMINAPI}/getallchildcategory`,{
					method:"GET",
					headers:{
							'Content-Type': 'application/json',
							Authorization : authorizationToken 
						}
				  });
				const data4 = await response4.json();
				setChildCatFilter(data4);
			   
				
				let seasonsList = [];
				data.forEach(async (season, index) => {
				 seasonsList.push({categoryname:data2.find((result)=> result._id===season.categoryid).categoryname, subcategoryname:data3.find((result)=> result._id===season.subcategoryid).subcategoryname, childcategoryname:data4.find((result)=> result._id===season.childcategoryid).childcategoryname, subchildcategoryname:season.subchildcategoryname, created_date:season.created_date, status:season.status,_id:season._id});
			
				});
	
				//console.log("sessionlist",seasonsList)
	
	
				
				setRecords(seasonsList);
				setAllRecords(seasonsList);
				setdatatblloader(false);
				// console.log(data);
			 }
		
		
		  } 
		  catch (error) 
		  {
			 //console.log("adminerror",error);
			 setdatatblloader(false);
		  }
	}

		const getAllCategory = async ()=>
		{
			try 
			{
				const response = await fetch(`${ADMINAPI}/getallcategoryaccordingstatus`,{
					method:"GET",
					headers:{
							'Content-Type': 'application/json',
							Authorization : authorizationToken 
						}
				  });
			
				const data = await response.json();
				if(data.length === "" || data.length === 0 || data.length === null || data.length === undefined)
				{
	
				}
				else
				{
					setgetallcategory(data);
					//console.log("all category",data);
				}
				
			
			  } 
			  catch (error) 
			  {
				 //console.log("adminerror",error);
			  }
		}

	function trimSpaces(value) 
	{
		if(typeof value === 'string') 
		{
		  return value.trim();
		} 
		else if(Array.isArray(value)) 
		{
		  return value.map(item => trimSpaces(item));
		} 
		else if(typeof value === 'object' && value !== null) 
		{
		  const trimmedObject = {};
		  Object.keys(value).forEach(key => {
			trimmedObject[key] = trimSpaces(value[key]);
		  });
		  return trimmedObject;
		}
		return value;
	}	



	function ShowpopupAddnew()
	{
	  document.getElementById('popupaddnew').style='display:block';
	}
	function ClosepopupAddnew()  
	{
	  document.getElementById("form-add-new-record").reset();
	  
	  setsubchildcategory({ categoryid:"",subcategoryid:"",childcategoryid:"",subchildcategoryname:"",status:"" });
	  setImages([]);
	  setPreview([]);
	  setLoader(false);
	  document.getElementById('popupaddnew').style='display:none';
	}
	async function ShowpopupView(getid)
	{
	  
	  document.getElementById('popupview').style='display:block';
	  try{
		const response = await fetch(`${ADMINAPI}/getsinglesubchildcategory/${getid}`,{
			method : 'GET',
			headers:{
						'Content-Type': 'application/json',
						Authorization : authorizationToken 
					}
		});
  
		const singlesubchildcategorydata = await response.json();
		Setviewdata(singlesubchildcategorydata);
		//console.log("viewdata",singlesubchildcategorydata);



		const response2 = await fetch(`${ADMINAPI}/getsinglecategory/${singlesubchildcategorydata.categoryid}`,{
			method : 'GET',
			headers:{
						'Content-Type': 'application/json',
						Authorization : authorizationToken 
					}
		});
  		const singlecategorydata = await response2.json();
		//console.log("singlecategoryviewdata",singlecategorydata);
		setcategorydata(singlecategorydata);


		const response3 = await fetch(`${ADMINAPI}/getsinglesubcategory/${singlesubchildcategorydata.subcategoryid}`,{
			method : 'GET',
			headers:{
						'Content-Type': 'application/json',
						Authorization : authorizationToken 
					}
		});
  		const singlesubcategorydata = await response3.json();
		//console.log("singlesubcategoryviewdata",singlesubcategorydata);
		setsubcategorydata(singlesubcategorydata);

		
		const response4 = await fetch(`${ADMINAPI}/getsinglechildcategory/${singlesubchildcategorydata.childcategoryid}`,{
			method : 'GET',
			headers:{
						'Content-Type': 'application/json',
						Authorization : authorizationToken 
					}
		});
  		const singlechildcategorydata = await response4.json();
		//console.log("singlechildcategoryviewdata",singlechildcategorydata);
		setchildcategorydata(singlechildcategorydata);


		const response5 = await fetch(`${ADMINAPI}/getmultiimages/${getid}`,{
			method : 'GET',
			headers:{
						'Content-Type': 'application/json',
						Authorization : authorizationToken 
					}
		});
  		const multiimagedata = await response5.json();
		//console.log("multiimagedata",multiimagedata);
		setmultiimagedata(multiimagedata);
		
	  }
	  catch(error)
	  {
		//console.log(error);
	  }
  
	}
	function ClosepopupView()
	{
	  document.getElementById('popupview').style='display:none';
	}

	////////
async function ShowpopupEdit(getid)
{
	Seteditid(getid);

	
  document.getElementById('popupedit').style='display:block';
	try
	{
		const imageresponse = await fetch(`${ADMINAPI}/getmultiimages/${getid}`,{
			method : 'GET',
			headers:{
						'Content-Type': 'application/json',
						Authorization : authorizationToken 
					}
		});
  		const multiimagedata = await imageresponse.json();
		//console.log("editimgdata",multiimagedata);
		setmultiimagedata(multiimagedata);


		const response = await fetch(`${ADMINAPI}/getsinglesubchildcategory/${getid}`,{
		method : 'GET',
		headers:{
					'Content-Type': 'application/json',
					Authorization : authorizationToken 
				}
		});

	const singlesubchildcategorydata = await response.json();
	Setedituserdata(singlesubchildcategorydata);
	showSubcategory(singlesubchildcategorydata.categoryid);
	showChildcategory(singlesubchildcategorydata.subcategoryid);
	//console.log("editdatayu",singlesubchildcategorydata);

	}
	catch(error)
   {
	//console.log(error);
   }
}


	function ClosepopupEdit()
	{
	  document.getElementById('popupedit').style='display:none';
	}
	function ShowpopupDelete(getid)
	{
	  SetDeleteid(getid);
	  document.getElementById('popupdelete').style='display:block';
	}
	function ClosepopupDelete()
	{
	  document.getElementById('popupdelete').style='display:none';
	}

	//////

	
    const customStyles = {
        headRow: {
            style: {
              color:'#223336',
              backgroundColor: '#e7eef0'
            },
          },
          striped: {
              default: 'red'
          },
        rows: {
          style: {
            minHeight: '45px', // override the row height
          }
        },
        headCells: {
          style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
          },
        },
        cells: {
          style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
          },
        },
      };
    function convertArrayOfObjectsToCSV(args) {  
        var result, ctr, keys, columnDelimiter, lineDelimiter, data;

        data = args.data || null;
        if (data == null || !data.length) {
            return null;
        }

        columnDelimiter = args.columnDelimiter || ',';
        lineDelimiter = args.lineDelimiter || '\n';

        keys = Object.keys(data[0]);

        result = '';
        result += keys.join(columnDelimiter);
        result += lineDelimiter;

        data.forEach(function(item) {
            ctr = 0;
            keys.forEach(function(key) {
                if (ctr > 0) result += columnDelimiter;

                result += item[key];
                ctr++;
            });
            result += lineDelimiter;
        });

        return result;
    }
	function downloadCSV(args) {  
        	if(records.length !== undefined && records.length !== null && records.length !== '') 
			{
				var data, filename, link;
				var csv = convertArrayOfObjectsToCSV({
					//data: records     //for getting all column data
					data: records.map(({ _id,__v,imagesrc,imagename, ...rest }) => rest)
				});
				if (csv == null) return;
		
				filename = args.filename || 'Subchildcategory-List.csv';
		
				if (!csv.match(/^data:text\/csv/i)) {
					csv = 'data:text/csv;charset=utf-8,' + csv;
				}
		
		   
				data = encodeURI(csv);
		
				link = document.createElement('a');
				link.setAttribute('href', data);
				link.setAttribute('download', filename);
				link.click();
			}
			else
			{
				toast.error(process.env.REACT_APP_NO_RECORD_DOWNLOAD);
			}

    }
   
    const columns=[
        {
            name:"CATEGORY",
            selector:row=>row.categoryname,   //categoryname is colum name of table
            sortable:true,
       
        },
		{
            name:"SUB CATEGORY",
            selector:row=>row.subcategoryname,   //subcategoryname is colum name of table
            sortable:true,
       
        },
		{
            name:"CHILD CATEGORY",
            selector:row=>row.childcategoryname,   //childcategoryname is colum name of table
            sortable:true,
       
        },
		{
            name:"SUBCHILD CATEGORY",
            selector:row=>row.subchildcategoryname,   //subchildcategoryname is colum name of table
            sortable:true,
       
        },
        {
            name:"STATUS",
            selector:row=>row.status,
			cell: row => <span style={{ textTransform: 'capitalize' }}>{row.status}</span>,
            sortable:true
        },
        {
            name:"ACTION", 
			selector:row=>row._id,
			cell: cellinfo =>([<HiEye title='View' className='actioniconview' onClick={()=> ShowpopupView(cellinfo._id)} />,<MdEdit title='Edit' className='actionicon' onClick={()=> ShowpopupEdit(cellinfo._id)}  />, " ", <RiDeleteBin6Line title='Delete' className='actionicon' onClick={()=> ShowpopupDelete(cellinfo._id)} />]),
		
        }
       ];

       function handleFilter(event)
       {
			setdatatblloader(true);
			setSearch(event.target.value.toLowerCase());
			setFromDate('');
			setToDate('');
			if(allrecords.length === 0 || allrecords.length === undefined || allrecords.length === null)
			{
				setdatatblloader(false);
				return null;
			}
			else
			{
				if(event.target.value !== '')
				{
					const newData = allrecords.filter(row=>{
					 return(
							row.categoryname.toLowerCase().includes(event.target.value.toLowerCase()) ||
							row.subcategoryname.toLowerCase().includes(event.target.value.toLowerCase()) ||
							row.childcategoryname.toLowerCase().includes(event.target.value.toLowerCase()) ||
							row.subchildcategoryname.toLowerCase().includes(event.target.value.toLowerCase()) ||
							row.status.toLowerCase().includes(event.target.value.toLowerCase())
						  );
					});

				
					setRecords(newData);
					setdatatblloader(false);
				}
				else
				{
					setRecords(allrecords);
					setdatatblloader(false);
				}
			}
       
       }

	   const columnspdf = [
		{ header: "CATEGORY", dataKey: "categoryname" },
		{ header: "SUB CATEGORY", dataKey: "subcategoryname" },
		{ header: "CHILD CATEGORY", dataKey: "childcategoryname" },
		{ header: "SUBCHILD CATEGORY", dataKey: "subchildcategoryname" },
		{ header: "CREATED", dataKey: "created_date" },
		{ header: "STATUS", dataKey: "status" },
	  ]; 
	   //////////////////
	   const showSubcategory = async (getid)=>{
		try
		{
			const response = await fetch(`${ADMINAPI}/getallsubcategorybycategoryid/${getid}`,{
				method:"GET",
				headers:{
							'Content-Type': 'application/json',
							Authorization : authorizationToken 
						}
			  });
		
			 if(response.ok)
			 {
				const data = await response.json();
				setallsubcategory(data);
				
			 }
			 else
			 {
				setallsubcategory([]);
			 }
			 
		}
		catch(error)
		{

		}

	} 

	const showChildcategory = async (getid)=>{
		
		try
		{
			const response = await fetch(`${ADMINAPI}/getallchildcategorybysubcategoryid/${getid}`,{
				method:"GET",
				headers:{
							'Content-Type': 'application/json',
							Authorization : authorizationToken 
						}
			  });
		
			 if(response.ok)
			 {
				const data = await response.json();
				setallchildcategory(data);
				
			 }
			 else
			 {
				setallsubcategory([]);
			 }
			 
		}
		catch(error)
		{

		}

	} 

	///////////
	//const[edituserdata,Setedituserdata] = useState({categoryid:"",subcategoryid:"",childcategoryname:"", status:""});
	const showSubcategoryOnchange = async (e)=>{
		const getid = e.target.value;
		edituserdata.subcategoryid="";

		subchildcategory.subcategoryid="";
		setallsubcategory([]);
		subchildcategory.childcategoryid="";
		setallchildcategory([]);
	
		try
		{
			const response = await fetch(`${ADMINAPI}/getallsubcategorybycategoryid/${getid}`,{
				method:"GET",
				headers:{
							'Content-Type': 'application/json',
							Authorization : authorizationToken 
						}
			  });
		
			 if(response.ok)
			 {
				const data = await response.json();
				setallsubcategory(data);
				
			 }
			 else
			 {
				setallsubcategory([]);
			 }
			 
		}
		catch(error)
		{

		}

	} 

	const showChildcategoryOnchange = async (e)=>{
		const getid = e.target.value;
		edituserdata.subcategoryid="";
		edituserdata.childcategoryid="";
		setallchildcategory([]);
		subchildcategory.childcategoryid="";
	
		try
		{
			const response = await fetch(`${ADMINAPI}/getallchildcategorybysubcategoryid/${getid}`,{
				method:"GET",
				headers:{
							'Content-Type': 'application/json',
							Authorization : authorizationToken 
						}
			  });
		
			 if(response.ok)
			 {
				const data = await response.json();
				setallchildcategory(data);
				
			 }
			 else
			 {
				setallchildcategory([]);
			 }
			 
		}
		catch(error)
		{

		}

	} 

	const downloadPDF = () =>{
			if(records.length !== undefined && records.length !== null && records.length !== '') 
			{
				const doc = new jsPDF();
				doc.text("Subchildcategory-List", 14, 16);
				doc.autoTable({
				  head: [columnspdf.map(col => col.header)],
				  body: records.map(row => columnspdf.map(col => row[col.dataKey])),
				  startY: 20,
				});
				doc.save("Subchildcategory-List.pdf");
			}
			else
			{
				toast.error(process.env.REACT_APP_NO_RECORD_DOWNLOAD);
			}
	

	}

	  //////for adding new product
	  const[subchildcategory,setsubchildcategory] = useState({    //calling on pageload
        categoryid:"",
		subcategoryid:"",
		childcategoryid:"",
		subchildcategoryname:"",
        status:""
       
    });
    
    const handleInput = (e)=>{        //calling on typing
       // console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setsubchildcategory({
            ...subchildcategory,
            [name]:value
        })

    };

	const ReadMultiImages = (e)=>{
	const files = Array.from(e);
    const validImages = [];
    //const errorMessages = [];

    files.forEach((file) => {
     
      /*if (!file.type.startsWith('image/')) {
        errorMessages.push(`${file.name} is not a valid image file.`);
        return;
      } */

     
      /*if (file.size > 2 * 1024 * 1024) {
        errorMessages.push(`${file.name} exceeds the 2MB size limit.`);
        return;
      }*/

      validImages.push(file);
      
    });

    setImages((prevImages) => [...prevImages, ...validImages]);   //to send images data in backend
}
   
	const DeletePreviewImages = (indexToRemove) => {
		setImages((prevImages) => prevImages.filter((_, index) => index !== indexToRemove));
		//to send images data in backend
	
	  };

    const handleSubmit = async (e) =>{      //calling on submit
        e.preventDefault();       //to stop page refresh
		
		setpopupwait(true);
		setLoader(true);

		const formdata = new FormData();
        images.forEach((image) => {
            formdata.append('images', image);
			
        });

		//console.log("original length: ",images.length)
		const imgresponse = await fetch(`${ADMINAPI}/multipleproductimage`,
			{
			  method:"POST",
			  'Content-Type': 'multipart/form-data',
			  body:formdata
			});
			const imgfeedback = await imgresponse.json();
            //console.log('Images uploaded successfully:', imgfeedback);
			const subchildcategorywithimgstatus = {...subchildcategory,...imgfeedback}
			//console.log('new data :', subchildcategorywithimgstatus);

        try
        {
          const response = await fetch(`${ADMINAPI}/createsubchildcategory`,{
              method:"POST",
              headers:{
							'Content-Type': 'application/json',
							Authorization : authorizationToken 
						},
              body:JSON.stringify(trimSpaces(subchildcategorywithimgstatus))
          });

          const res_data = await response.json();
          //console.log("response data",res_data);

          if(response.ok)
          {
            setsubchildcategory({ 
				categoryid:"",
				subcategoryid:"",
				childcategoryid:"",
				subchildcategoryname:"",
				status:""
                
              });
              //setResultsignup(res_data.msg);
			  document.getElementById("form-add-new-record").reset();
              
			  setpopupsuccess(true);
			  setresponseheading(process.env.REACT_APP_SUCCESS_HEADING_CREATE)
			  setresponsemsg(res_data.msg);
			 

			  //toast.success(res_data.msg);
			  setLoader(false);
			  getAllRecords();
			  ClosepopupAddnew();
			  setpopupwait(false);
              
          }
          else
          {
			setpopupwait(false);
			toast.error(res_data.msg);
			setLoader(false);
          }
          //console.log(response);
      }
      catch(error)
      {
		setpopuperror(true);
		setresponseheading(process.env.REACT_APP_ERROR_HEADING)
		setresponsemsg(process.env.REACT_APP_ERROR_MESSAGE)
		setLoader(false);
		setpopupwait(false);
		//toast.error(error);
      }

    }



	//////for Edit Record
   	const[edituserdata,Setedituserdata] = useState({categoryid:"",subcategoryid:"",childcategoryid:"",subchildcategoryname:"", status:""});
    const handleInputEdit = (e)=>{        //calling on typing
       // console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        Setedituserdata({
            ...edituserdata,
            [name]:value
        })
		//console.log("usereditdataoo",edituserdata);
    };
 
    const handleSubmitEdit = async (e) =>{      //calling on submit
		e.preventDefault();       //to stop page refresh
		setpopupwait(true);
		setLoader(true);
        setResultedit('');
		//alert(edituserdata.subcategoryid)

		const formdata = new FormData();
        images.forEach((image) => {
            formdata.append('images', image);
			
        });

		//console.log("original length: ",images.length)
		const imgresponse = await fetch(`${ADMINAPI}/multipleproductimage`,
			{
			  method:"POST",
			  'Content-Type': 'multipart/form-data',
			  body:formdata
			});
			const imgfeedback = await imgresponse.json();
			setImages([]);
			setPreview([]);
            //console.log('Images uploaded successfully:', imgfeedback);
			const subchildcategorywithimgstatus = {...edituserdata,...imgfeedback}


        try
        {
          const response = await fetch(`${ADMINAPI}/geteditsubchildcategory/${editid}`,{
              method:"PATCH",
              headers:{
                  'Content-Type': 'application/json',
                  Authorization : authorizationToken 

              },
              body:JSON.stringify(trimSpaces(subchildcategorywithimgstatus))
          });

          const res_data = await response.json();
          //console.log("response data",res_data);

          if(response.ok)
          { 
			document.getElementById("editsubchildcategory-form").reset();
		  	Setedituserdata({ 
				categoryid:"",
				subcategoryid:"",
				childcategoryid:"",
				subchildcategoryname:"",
				status:""
                
              });
			setResultedit(res_data.msg);
           // toast.success(res_data.msg);
            getAllRecords();
			ClosepopupEdit();
            //setTimeout(() => { ClosepopupEdit() }, 3000);
            setLoader(false);

			setpopupsuccess(true);
			setresponseheading(process.env.REACT_APP_SUCCESS_HEADING_UPDATE);
			setresponsemsg(res_data.msg);
			setpopupwait(false);
          }
          else
          {
			setpopupwait(false);
			setLoader(false);
            setResultedit(res_data.msg);
            toast.error(res_data.msg);
          }
          //console.log(response);
      }
      catch(error)
      {
		 //toast.error(error);
		 setpopuperror(true);
		 setresponseheading(process.env.REACT_APP_ERROR_HEADING)
		 setresponsemsg(process.env.REACT_APP_ERROR_MESSAGE)
		 setLoader(false);
		 setpopupwait(false);
      }

    }


	////////
	const DeleteRecord = async(e)=>{
		e.preventDefault();
		ClosepopupDelete();
		setLoader(true);
		setpopupwait(true)
		try
		{
			const response = await fetch(`${ADMINAPI}/deletesubchildcategory/${deleteid}`,{
				method : 'DELETE',
				headers:{
							'Content-Type': 'application/json',
							Authorization : authorizationToken 
						}
			});
			const res_data = await response.json();
			//console.log("response data",res_data);
			if(response.ok)
				{
					getAllRecords();
					setLoader(false);
					setpopupwait(false);
					setpopupsuccess(true);
					setresponseheading(process.env.REACT_APP_SUCCESS_HEADING_DELETE);
					setresponsemsg(res_data.msg);
					//toast.success(res_data.msg);
					//ClosepopupDelete();
					//setTimeout(() => { ClosepopupDelete() }, 2000);
	
				}
				else
				{
					setpopupwait(false);
					setpopuperror(true);
					setresponseheading(process.env.REACT_APP_ERROR_HEADING);
					setresponsemsg(res_data.msg);
					//toast.error(res_data.msg);
					setLoader(false);
				}
		  
			}
			catch(error)
			{
				//console.log("delete-error",error)
				setpopupwait(false);
				setpopuperror(true);
				setresponseheading(process.env.REACT_APP_ERROR_HEADING);
				setresponsemsg(process.env.REACT_APP_ERROR_MESSAGE);
				//toast.error(error);
				setLoader(false);
			}
	  
	}

	const DeleteMultiImage = async(deleteid)=>{
		setpopupwait(true);
		try
		{
			const response = await fetch(`${ADMINAPI}/deletemultiimage/${deleteid}`,{
				method : 'DELETE',
				headers:{
							'Content-Type': 'application/json',
							Authorization : authorizationToken 
						}
			});
			const res_data = await response.json();
			//console.log("response data",res_data);
			if(response.ok)
			{
				ShowpopupEdit(editid); 
				setImages([]);
				setPreview([]);  
				setpopupwait(false);
				//toast.success(res_data.msg);
			}
			else
			{
				setImages([]);
				setPreview([]);
				toast.error(res_data.msg);
				setpopupwait(false);
			}
	  
		}
		catch(error)
		{
			//console.log("delete-error",error)
			//toast.error(error);
			setImages([]);
			setPreview([]);
			setpopuperror(true);
			setresponseheading('Error!');
			setresponsemsg('Server error')
			setLoader(false);
			setpopupwait(false);
		}
	}

	const FilterByDate = async ()=>{
		setdatatblloader(true);
		setSearch('');
		/*var fromDateFomatted = '';
		var toDateFomatted = '';
		if(fromDate)
		{
			fromDateFomatted = format(fromDate, "dd-MM-yyyy");
		}
		if(toDate)
		{
			toDateFomatted = format(toDate, "dd-MM-yyyy");
		}*/
		
		const filterdates = {fromDate:fromDate,toDate:toDate}
		try
		{
			const response = await fetch(`${ADMINAPI}/filtersubchildcategorybydate`,{
				method:"POST",
				headers:{
							'Content-Type': 'application/json',
							Authorization : authorizationToken 
						},
				body:JSON.stringify(trimSpaces(filterdates))
				
			});
  			const res_data = await response.json();
			//console.log("ffdata:",res_data)
			if(response.ok)
			{
			  /*let seasonsList = [];
			  res_data.forEach(async (season, index) => {
			   seasonsList.push({categoryname:catFilter.find((result)=> result._id===season.categoryid).categoryname, subcategoryname:subCatFilter.find((result)=> result._id===season.subcategoryid).subcategoryname, childcategoryname:season.childcategoryname, created_date:season.created_date ,status:season.status,_id:season._id});
		  
			  });*/
			  let seasonsList = [];
			  res_data.forEach(async (season, index) => {
			   seasonsList.push({categoryname:catFilter.find((result)=> result._id===season.categoryid).categoryname, subcategoryname:subCatFilter.find((result)=> result._id===season.subcategoryid).subcategoryname, childcategoryname:childCatFilter.find((result)=> result._id===season.childcategoryid).childcategoryname, subchildcategoryname:season.subchildcategoryname, created_date:season.created_date, status:season.status,_id:season._id});
		  
			  });
			  setRecords(seasonsList);
			  setdatatblloader(false);
			}
			else
			{
				toast.error(res_data.msg);
				setdatatblloader(false);
			}
		  
		}
		catch(error)
		{
			setpopuperror(true);
			setresponseheading('Error!');
			setresponsemsg('Server error!');
			setdatatblloader(false);
		}

   }

   const ResetFilter = async ()=>{
	setFromDate('');
	setToDate('');
	setSearch('');
	getAllRecords();
   }

  return (
    <>
     { showloader  ? <div className='parent-loader'><div className="loading"><img loading='lazy'  src={loader} alt="loader" /></div></div> : null }  
	   
	   <div id="popupview" className="overlayadmin" style={{display:'none'}}>
  <div className="popupview animate-zoom">
    <div className="view-heading"><i className="fa fa-eye" aria-hidden="true"></i> View Details</div>
    <span onClick={ClosepopupView}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span>
    <div className="container-fluid padd_0" >
	 <div className="viewheight viewheightmobile" id="style-scroll2">
		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Category:</span>
			</div> 
			<div className="col-10 mobwidth100admin">
			  <span className="cont-cont">{categorydata.categoryname}</span>
			</div>
			
		</div>
		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Sub category:</span>
			</div> 
			<div className="col-10 mobwidth100admin">
				<span className="cont-cont">{subcategorydata.subcategoryname}</span>
			</div>
			
		</div>
		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Child category:</span>
			</div> 
			<div className="col-10 mobwidth100admin">
				<span className="cont-cont">{childcategorydata.childcategoryname}</span>
			</div>
			
		</div>
		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Sub Child category:</span>
			</div> 
			<div className="col-10 mobwidth100admin">
				<span className="cont-cont">{viewdata.subchildcategoryname}</span>
			</div>
			
		</div>
		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Image:</span>
			</div> 
			<div className="col-10 mobwidth100admin">
				<span className="cont-cont">
				{
					multiimagedata.length > 0 ? 
						multiimagedata.map((data,index) =>
							<img src={`${process.env.REACT_APP_BACK_END_URL}/uploads/${data.imagename}`} style={{width:'100px',height:'100px',marginRight:'5px',marginBottom:'5px'}} />
  										
						) : <img src={`${process.env.REACT_APP_BACK_END_URL}/uploads/noimg.svg`} style={{width:'100px'}} />
				}
				</span>
				
			</div>
			
		</div>
		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Status:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<span className="cont-cont" style={{ textTransform: 'capitalize' }}>{viewdata.status}</span>
			</div>
		</div>

		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Created Date:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				{/* <span className="cont-cont">{viewdata.created_date}</span> */}
				<span className="cont-cont">{viewdata.created_date ? format(viewdata.created_date, "dd-MM-yyyy") : viewdata.created_date}</span>
			</div>
		</div>
	
		{/* <div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Password:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<span className="cont-cont">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
			</div>
		</div> */}
		{/* <div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Description:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<span className="cont-cont">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
			</div>
		</div> */}
		{/* <div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Description:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<span className="cont-cont">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
			</div>
		</div> */}
		
    </div>
	</div>
  </div>
</div>

    <div id="popupaddnew" className="overlayadmin" style={{display:'none'}}>
  <div className="popupaddnew animate-zoom">
    <div className="view-heading"><i className="fa fa-plus" aria-hidden="true"></i> Add New Record</div>
    <span onClick={ClosepopupAddnew}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span>
    <form onSubmit={handleSubmit} id="form-add-new-record">
	<div className="container-fluid padd_0" >
	 <div className="viewheight" id="style-scroll2">
	 
	 	<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Select category</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<select id="categoryid" name="categoryid" className="admin-control" onChange={(e)=>{ showSubcategoryOnchange(e);showChildcategoryOnchange(e);handleInput(e) }}>
					<option value="">Select category</option>
				
					{
						getallcategory
                 		.map((user,index) => 
                				<option key={index} value={user._id}> 
                				{user.categoryname}</option>)
					}
					
				</select>
			</div>
		</div>

		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Select sub category</span>
			</div>
			<div className="col-10 mobwidth100admin">
				 <select id="subcategoryid" name="subcategoryid" className="admin-control" onChange={(e)=>{ showChildcategoryOnchange(e);handleInput(e) }}>
					<option value="">Select sub category</option>
					{
						getallsubcategory
                 		.map((user,index) => 
                				<option key={index} value={user._id}> 
                				{user.subcategoryname}</option>)
					}
					
				</select>
			</div>
		</div>

		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Select child category</span>
			</div>
			<div className="col-10 mobwidth100admin">
				 <select id="childcategoryid" name="childcategoryid" className="admin-control" onChange={handleInput}>
					<option value="">Select child category</option>
					{
						getallchildcategory
                 		.map((user,index) => 
                				<option key={index} value={user._id}> 
                				{user.childcategoryname}</option>)
					}
					
				</select>
			</div>
		</div>

		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Sub Child category:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<input name="subchildcategoryname" id="subchildcategoryname" onChange={handleInput} type="text" className="admin-control" value={subchildcategory.subchildcategoryname} placeholder="Enter sub child category" />
			</div>
		</div>
		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Image:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<input name="subchildcategoryimg" id="subchildcategoryimg" onChange={ (e)=>{  ReadMultiImages([...e.target.files]); }} type="file" accept="image/png,image/jpg,image/jpeg,image/svg+xml,image/gif" multiple="multiple" className="admin-control"  />
				<span className='imginst'>upload only png,jpg,jpeg,svg and gif file.</span>
				{
					images.length > 0 && (
          				<div style={{ display: 'flex', flexWrap: 'wrap', marginTop:'10px' }}>
            				{
								images.map((image, index) => (
              					<div key={index} style={{ marginRight: '5px', position: 'relative' }}>
                					<img src={URL.createObjectURL(image)} alt={`image-${index}`} width="100px" height="100px" style={{ objectFit: 'cover',marginBottom:'5px' }} />
                					<button type="button" onClick={() => DeletePreviewImages(index)} title='Remove' style={{ position: 'absolute',top: 0,right: 0,backgroundColor: 'red',color: 'white',border: 'none',borderRadius: '50%',cursor: 'pointer' }}>
                  						&times;
                					</button>
              					</div>
            					))
							}
          				</div>
        			)
				}
				
			</div>
			
		</div>
		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Status:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<select name="status" id="status" onChange={handleInput} className="admin-control">
						<option value="" >Please select status</option>
						<option value="enable" >Enable</option>
						<option value="disable" >Disable</option>
				</select>
			</div>
		</div>
	
    </div>
	<div className="row mt-3">
		<div className="col">
			<div className="pull-right bottomeditbtn">
			    <span onClick={ClosepopupAddnew} className="btn btn-dark">Cancel</span>
				{
					loader ?  <button type="button" className="btn btn-success gender"><span>Please wait... <i className="fa fa-spinner fa-pulse fa-3x fa-fw fa-lg loadersize" ></i></span></button>
					:
					<button type="submit" className="btn btn-success gender">Submit</button>
				}
				
			</div>
		</div>
	</div>
	</div>
	</form>
  </div>
</div>

<div id="popupedit" className="overlayadmin" style={{display:'none'}}>
  <div className="popupedit animate-zoom">
    <div className="view-heading"><i className="fa fa-pencil" aria-hidden="true"></i> Edit Deails</div>
    <span onClick={ClosepopupEdit}><img loading='lazy'  src={closebtn} alt="close button" className="close" title="Close"/></span>
    <form onSubmit={handleSubmitEdit} id="editsubchildcategory-form">
	<div className="container-fluid padd_0" >
	 <div className="viewheight" id="style-scroll2">
	 <div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Select category</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<select id="categoryid" name="categoryid" className="admin-control" onChange={(e)=>{ showSubcategoryOnchange(e);handleInputEdit(e) }}>
					<option value="">Select category</option>
					{
						getallcategory.map((user,index) => 
                				<option key={index} value={user._id} selected={ edituserdata.categoryid === user._id ? true : false }> 
                				{user.categoryname}</option>)
					}
					
				</select>
			</div>
		</div>

		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Select sub category</span>
			</div>
			<div className="col-10 mobwidth100admin">
				 <select id="subcategoryid" name="subcategoryid" className="admin-control" onChange={(e)=>{ showChildcategoryOnchange(e);handleInputEdit(e) }}>
					<option value="">Select sub category</option>
					{
						getallsubcategory.map((user,index) => 
                				<option key={index} value={user._id}  selected={ edituserdata.subcategoryid === user._id ? true : false } >{user.subcategoryname}</option>)
					}
					
				</select>
			</div>
		</div>

		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Select child category</span>
			</div>
			<div className="col-10 mobwidth100admin">
				 <select id="childcategoryid" name="childcategoryid" className="admin-control" onChange={handleInputEdit}>
					<option value="">Select child category</option>
					{
						getallchildcategory.map((user,index) => 
                				<option key={index} value={user._id}  selected={ edituserdata.childcategoryid === user._id ? true : false } >{user.childcategoryname}</option>)
					}
					
				</select>
			</div>
		</div>

		

		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Sub Child category:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<input name="subchildcategoryname" id="subchildcategoryname" value={edituserdata.subchildcategoryname} onChange={handleInputEdit} type="text" className="admin-control"  placeholder="Enter your name" />
			</div>
		</div>

		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Image:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<input name="subchildcategoryimg" id="subchildcategoryimg" onChange={ (e)=>{  ReadMultiImages([...e.target.files]); }} type="file" accept="image/png,image/jpg,image/jpeg,image/svg+xml,image/gif" multiple="multiple" className="admin-control"  />
		    	<span className='imginst'>upload only png,jpg,jpeg,svg and gif file.</span>
				<div style={{ display: 'flex', flexWrap: 'wrap', marginTop:'10px' }}>
				

				{
					multiimagedata.length > 0 ? 
						multiimagedata.map((data,index) =>
						<div style={{position: 'relative'}}>
							<img src={`${process.env.REACT_APP_BACK_END_URL}/uploads/${data.imagename}`} style={{width:'100px',height:'100px',marginRight:'5px',marginBottom:'5px'}} />
						<button type="button" onClick={() => DeleteMultiImage(data._id)} title='Remove' style={{ position: 'absolute',top: 0,right: 0,backgroundColor: 'red',color: 'white',border: 'none',borderRadius: '50%',cursor: 'pointer' }}>
                  						&times;
                					</button>
						</div>
  										
						) : <img src={`${process.env.REACT_APP_BACK_END_URL}/uploads/noimg.svg`} style={{width:'100px'}} />
				}
				</div>
				
			</div>
			
		</div>

		<div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Status:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<select name="status" id="status" onChange={handleInputEdit} className="admin-control">
						<option value="" >Please select status</option>
						<option value="enable" selected={ edituserdata.status === "enable" ? true : false } >Enable</option>
						<option value="disable" selected={ edituserdata.status === "disable" ? true : false } >Disable</option>
				</select>
			</div>
		</div>
	
			{/* <div className="row mt-3">
			<div className="col-2 mobwidth100admin ">
				<span className="cont-heading">Description:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<textarea value="" className="desc-control" placeholder="Type here.. ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</textarea>
			</div>
		</div> */}
	
		{/* <div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">State:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<select className="admin-control">
					<option>Select your state</option>
					<option>Madhyapradesh</option>
					<option>chhatisgarh</option>
					<option>Rajsthan</option>
				</select>
			</div>
		</div> */}
		{/* <div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Gender:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<span className="cont-cont"><input type="radio" name="gender" /> Male</span>
				<span className="cont-cont gender"><input type="radio" name="gender" /> Female</span>
			</div>
		</div> */}
		{/* <div className="row mt-3">
			<div className="col-2 mobwidth100admin">
				<span className="cont-heading">Subject:</span>
			</div>
			<div className="col-10 mobwidth100admin">
				<span className="cont-cont"><input type="checkbox"  /> Hindi</span>
				<span className="cont-cont gender"><input type="checkbox"  /> English</span>
				<span className="cont-cont gender"><input type="checkbox"  /> Science</span>
				<span className="cont-cont gender"><input type="checkbox"  /> Math</span>
			</div>
		</div> */}
	
    </div>
	<div className="row mt-3">
		<div className="col">
			<div className="pull-right bottomeditbtn">
			    <span onClick={ClosepopupEdit} className="btn btn-dark">Cancel</span>
				{ loader ? <button type="button" className="btn btn-success gender">Please wait... <i className="fa fa-spinner fa-pulse fa-3x fa-fw fa-lg loadersize" ></i></button>
				  :
				<button type="submit" className="btn btn-success gender">Update</button>
				}
				
			</div>
		</div>
	</div>
	
	</div>
	</form>
  </div>
</div>

<div id="popupdelete" className="overlayadmin" style={{display:'none'}}>
  <div className="popupdelete animate-zoom">
  <div className='text-center'>
	<img  src={exclamation} style={{width:'125px'}} />
	<div className="view-delete-heading">{process.env.REACT_APP_DELETE_RECORD_HEADING}</div>
  </div>
   <form onSubmit={DeleteRecord}>
    <div className="container-fluid padd_0" >
	
	<div className="row mt-2">
			<div className="col text-center">
				<span className="delete-heading">{process.env.REACT_APP_DELETE_RECORD_MESSAGE}</span>
				<br/><br/>
			</div>
			
		</div>
	
		<div className="row mt-2">
		<div className="col">
			<div className="text-center">
			    <span onClick={ClosepopupDelete} className="btn btn-secondary f-weight">Cancel</span>
				{
					loader ? <button type="button" className="btn btn-danger gender f-weight">Please wait... <i className="fa fa-spinner fa-pulse fa-3x fa-fw fa-lg loadersize" ></i></button>
					:
					<button type="submit" className="btn btn-warning gender f-weight">Delete</button>
				}
				
			</div>
		</div>
	</div>
	</div>
    </form>
  </div>
</div>
	
	<div id="popupwait" className="overlayadmin" style={{ display: `${popupwait === true ? 'block' : 'none'}` }}
>
  <div className="popupwait animate-zoom">
  <div className="text-center">
	
	<img src={loadergif} style={{width:'50px'}} />
	</div>
  
    <div className="container-fluid padd_0" >
	
		<div className="row mt-2">
			<div className="text-center">
				<span className="delete-heading">Please wait...</span>
				
			</div>
			
		</div>
	

	</div>
  
  </div>
		</div>
	 
	    <div id="popupsuccess" className="overlayadmin" style={{ display: `${popupsuccess === true ? 'block' : 'none'}` }}>
  <div className="popupdelete animate-zoom">
  <div className='text-center'>
	<img  src={success} style={{width:'115px'}} />
  </div>
    <div className="view-success-heading text-center">{responseheading}</div>
    
   
    <div className="container-fluid padd_0" >
	
		<div className="row mt-2">
			<div className="col text-center">
				<span className="success-heading">{responsemsg}</span>
				<br/><br/>
			</div>
			
		</div>
	
	<div className="row mt-2">
		<div className="col">
			<div className="text-center">
			    <button onClick={()=>{setpopupsuccess(false)}} className="btn btn-success f-weight">Ok</button>
				
			</div>
		</div>
	</div>
	</div>
    
  </div>
		</div>

		<div id="popuperror" className="overlayadmin" style={{ display: `${popuperror === true ? 'block' : 'none'}` }}>
  <div className="popupdelete animate-zoom">
  <div className='text-center'>
	<img  src={error} style={{width:'115px'}} />
  </div>
    <div className="view-error-heading text-center">{responseheading}</div>
    
   
    <div className="container-fluid padd_0" >
	
		<div className="row mt-2">
			<div className="col text-center">
				<span className="error-heading">{responsemsg}</span>
				<br/><br/>
			</div>
			
		</div>
	
	<div className="row mt-2">
		<div className="col">
			<div className="text-center">
			    <button onClick={()=>{setpopuperror(false)}} className="btn btn-danger f-weight">Ok</button>
				
			</div>
		</div>
	</div>
	</div>
    
  </div>
		</div>
	
	
		<div className='container-fluid'>
            <div className='row'>
                
                
			<div className='col-2 left-bg padd_0 mobwidth100admin' > 
                    <div className='mobmenuadmin mobdnoneadmin animate-rightadmin'   id='mobilemenuadmin'>
					<AdminSideBar />
					</div>
					
                </div>
                
 				<div className='col-10 padding_0 mobwidth100admin'>
                       <AdminTopbar />
						
						<div className="container ">
							<div className="parent-row-top">
							<div className="row w-100 mt-2 mb-0">
								 <div className="col">
									<div>
										<span className="page-heading"><i className="fa fa-user" aria-hidden="true"></i> {Pageheading}</span>
										<span onClick={ShowpopupAddnew} className="btn btn-success mt-2 btn-sm pull-right"><i className="fa fa-plus" aria-hidden="true"></i> Add New</span>
									</div>
									<div className='page-heading-bottom'> {Pagesubheading}</div>
								 </div>
								
							
								
								
							</div>
							
						
							
							</div>
						
						</div>
						
                
					
						<div className="container ">
							<div className="parent-row parent-rowmob">

							<div className="row mt-4 childrow">
							<div className='download'>
									<div>
									<small>Search</small>
									<input type="text" value={search} onChange={handleFilter} className='form-control' placeholder='Search' />
									</div>
									
								
									<div className='datepk'>
									<small>From date</small>
									<input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)}  className='form-control' placeholder='From date' />
									</div>

									<div>
									<small>To date</small>
									<input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} className='form-control' placeholder='To date' />
									</div>

									
									<div className='filtersearchbtn'>
									<div style={{visibility:'hidden'}}>dd</div>
									<button type="button" onClick={FilterByDate} title="search" className='btn btn-light searchbtn'>Search</button>	
									</div>

									<div className='filterresetbtn'>
									<div style={{visibility:'hidden'}}>dd</div>
									<button type="button" onClick={ResetFilter} title="reset" className='btn btn-light searchbtn'><i class="fa fa-undo" aria-hidden="true"></i></button>	
									</div>
								

									<div className='downloadicncenter'>
									<div style={{visibility:'hidden'}}>dd</div>
										<span onClick={downloadPDF}><img title='Download PDF' src={pdf} className='excel'/></span>
										<span onClick={downloadCSV}><img title='Download CSV' src={csv} className='excel'/></span>
										
									</div>
							</div>
							</div>

							<div className="row w-100 mt-4 mobdisplay">
								 <div className="col mobpadright0">
								
								 <div className='table-responsive'>
								 {
										datatblloader ? 
										<div className="text-center">
												<img src={loadergif} style={{width:'50px'}} /><br/>
												<span className="delete-heading">Please wait...</span>
										</div>
										:
										<DataTable 
               							data={records.length === "" || records.length === 0 || records.length === undefined ? '' : records}
										columns={columns}
			   							fixedHeader
			   							pagination  
			   							highlightOnHover
			   							customStyles={customStyles}
			  							/> 
									}
								 

										
								 </div>
								 
									{/* <div className="pull-right mt-3">
										<button className="btn btn-secondary btn-sm"><i className="fa fa-angle-double-left" aria-hidden="true"></i> Prev</button><span className="cont-cont"> 1 of 100  </span> <button className="btn btn-secondary btn-sm">Next <i className="fa fa-angle-double-right" aria-hidden="true"></i></button>
									</div> */}
								 
								 </div>
								
							
								
								
							</div>
							
						
							
							</div>
						
						</div>
						
                
				
				</div>
            </div>
        </div>
	
	
		{ showloader ? Setshowloader(false) : null } 
    </>
  )
}

export default AdminSubChildCategory