import React,{useState} from "react";
import DataTable, { createTheme } from 'react-data-table-component'
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";



//npm install react-data-table-component

// npm i react-icons    //for icons and follow below link
//  https://react-icons.github.io/react-icons/            //import and use

const Datatable = ()=>{

  

    createTheme('solarized', {
        text: {
          primary: '#268bd2',
          secondary: '#2aa198',
        },
        background: {
          default: '#002b36',
        },
        context: {
          background: '#cb4b16',
          text: '#FFFFFF',
        },
        divider: {
          default: '#073642',
        },
        action: {
          button: 'rgba(0,0,0,.54)',
          hover: 'rgba(0,0,0,.08)',
          disabled: 'rgba(0,0,0,.12)',
        },
      });

      const conditionalRowStyles = [
        {
          when: row => (row.id % 2) !== 0,
          style: {
            backgroundColor: 'white',
            color: 'black',
            '&:hover': {
              cursor: 'pointer',
            },
          },
        },
        // You can also pass a callback to style for additional customization
        {
            when: row => (row.id % 2) === 0,
          //when: row => row.id  > 3,
         style: {
            backgroundColor: 'pink',
            color: 'white',
            '&:hover': {
              cursor: 'pointer',
            },
          },
        },
      ];
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
        
        var data, filename, link;
        var csv = convertArrayOfObjectsToCSV({
            data: stockData   //for getting all column data
            //data: stockData.map(({ _id,__v,imagesrc,imagename, ...rest }) => rest) //for getting all column data except _id,__v,imagesrc and imagename
        });
        if (csv == null) return;

        filename = args.filename || 'export.csv';

        if (!csv.match(/^data:text\/csv/i)) {
            csv = 'data:text/csv;charset=utf-8,' + csv;
        }

   
        data = encodeURI(csv);

        link = document.createElement('a');
        link.setAttribute('href', data);
        link.setAttribute('download', filename);
        link.click();
    }
   
    const columns=[
        {
            name:"Name",
            selector:row=>row.name,
            sortable:true,
            
            
        },
        {
            name:"Email",
            selector:row=>row.email,
            sortable:true
        },
        {
            name:"Age",
            selector:row=>row.age,
            sortable:true
        }
        ,
        {
            name:"Action",
            selector:row=>row.action,
            sortable:true
        }
       ];
    
       const stockData=[
        {
            id:1,
            name:"sameer",
            email:"vaibhav@gmail.com",
            age:'25',
            action:[<MdEdit title='Edit' style={{marginRight:'20px',cursor:'pointer'}} />,<RiDeleteBin6Line title='Delete' style={{cursor:'pointer'}} />]
            //action:`${<MdEdit />} ${<RiDeleteBin6Line />}`
            
        },
        {
            id:2,
            name:"vaibhav2",
            email:"vaibhav2@gmail.com",
            age:'55',
            action:[<MdEdit title='Edit' style={{marginRight:'20px',cursor:'pointer'}} />,<RiDeleteBin6Line title='Delete' style={{cursor:'pointer'}} />]
        },
        {
            id:3,
            name:"vaibhav3",
            email:"vaibhav3@gmail.com",
            age:'65',
            action:[<MdEdit title='Edit' style={{marginRight:'20px',cursor:'pointer'}} />,<RiDeleteBin6Line title='Delete' style={{cursor:'pointer'}} />]
        },
        {
            id:4,
            name:"vaibhav4",
            email:"vaibhav4@gmail.com",
            age:'75',
            action:[<MdEdit title='Edit' style={{marginRight:'20px',cursor:'pointer'}} />,<RiDeleteBin6Line title='Delete' style={{cursor:'pointer'}} />]
        },
        {
            id:5,
            name:"vaibhav5",
            email:"vaibhav5@gmail.com",
            age:'85',
            action:[<MdEdit title='Edit' style={{marginRight:'20px',cursor:'pointer'}} />,<RiDeleteBin6Line title='Delete' style={{cursor:'pointer'}} />]
        },
        {
            id:6,
            name:"vaibhav6",
            email:"vaibhav@gmail.com",
            age:'25',
            action:[<MdEdit title='Edit' style={{marginRight:'20px',cursor:'pointer'}} />,<RiDeleteBin6Line title='Delete' style={{cursor:'pointer'}} />]
        },
        {
            id:7,
            name:"vaibhav7",
            email:"vaibhav2@gmail.com",
            age:'55',
            action:[<MdEdit title='Edit' style={{marginRight:'20px',cursor:'pointer'}} />,<RiDeleteBin6Line title='Delete' style={{cursor:'pointer'}} />]
        },
        {
            id:8,
            name:"vaibhav8",
            email:"vaibhav3@gmail.com",
            age:'65',
            action:[<MdEdit title='Edit' style={{marginRight:'20px',cursor:'pointer'}} />,<RiDeleteBin6Line title='Delete' style={{cursor:'pointer'}} />]
        },
        {
            id:9,
            name:"vaibhav9",
            email:"vaibhav4@gmail.com",
            age:'75',
            action:[<MdEdit title='Edit' style={{marginRight:'20px',cursor:'pointer'}} />,<RiDeleteBin6Line title='Delete' style={{cursor:'pointer'}} />]
        },
        {
            id:10,
            name:"vaibhav10",
            email:"vaibhav5@gmail.com",
            age:'85',
            action:[<MdEdit title='Edit' style={{marginRight:'20px',cursor:'pointer'}} />,<RiDeleteBin6Line title='Delete' style={{cursor:'pointer'}} />]
        },
        {
            id:11,
            name:"vaibhav11",
            email:"vaibhav@gmail.com",
            age:'25',
            action:[<MdEdit title='Edit' style={{marginRight:'20px',cursor:'pointer'}} />,<RiDeleteBin6Line title='Delete' style={{cursor:'pointer'}} />]
        },
        {
            id:12,
            name:"vaibhav12",
            email:"vaibhav2@gmail.com",
            age:'55',
            action:[<MdEdit title='Edit' style={{marginRight:'20px',cursor:'pointer'}} />,<RiDeleteBin6Line title='Delete' style={{cursor:'pointer'}} />]
        },
        {
            id:13,
            name:"vaibhav13",
            email:"vaibhav3@gmail.com",
            age:'65',
            action:[<MdEdit title='Edit' style={{marginRight:'20px',cursor:'pointer'}} />,<RiDeleteBin6Line title='Delete' style={{cursor:'pointer'}} />]
        },
        {
            id:14,
            name:"vaibhav14",
            email:"vaibhav4@gmail.com",
            age:'75',
            action:[<MdEdit title='Edit' style={{marginRight:'20px',cursor:'pointer'}} />,<RiDeleteBin6Line title='Delete' style={{cursor:'pointer'}} />]
        },
        {
            id:15,
            name:"vaibhav15",
            email:"vaibhav5@gmail.com",
            age:'85',
            action:[<MdEdit title='Edit' style={{marginRight:'20px',cursor:'pointer'}} />,<RiDeleteBin6Line title='Delete' style={{cursor:'pointer'}} />]
        },
        {
            id:16,
            name:"vaibhav16",
            email:"vaibhav@gmail.com",
            age:'25',
            action:[<MdEdit title='Edit' style={{marginRight:'20px',cursor:'pointer'}} />,<RiDeleteBin6Line title='Delete' style={{cursor:'pointer'}} />]
        },
        {
            id:17,
            name:"vaibhav17",
            email:"vaibhav2@gmail.com",
            age:'55',
            action:[<MdEdit title='Edit' style={{marginRight:'20px',cursor:'pointer'}} />,<RiDeleteBin6Line title='Delete' style={{cursor:'pointer'}} />]
        },
        {
            id:18,
            name:"vaibhav18",
            email:"vaibhav3@gmail.com",
            age:'65',
            action:[<MdEdit title='Edit' style={{marginRight:'20px',cursor:'pointer'}} />,<RiDeleteBin6Line title='Delete' style={{cursor:'pointer'}} />]
        },
        {
            id:19,
            name:"vaibhav19",
            email:"vaibhav4@gmail.com",
            age:'75',
            action:[<MdEdit title='Edit' style={{marginRight:'20px',cursor:'pointer'}} />,<RiDeleteBin6Line title='Delete' style={{cursor:'pointer'}} />]
        },
        {
            id:20,
            name:"vaibhav20",
            email:"vaibhav5@gmail.com",
            age:'85',
            action:[<MdEdit title='Edit' style={{marginRight:'20px',cursor:'pointer'}} />,<RiDeleteBin6Line title='Delete' style={{cursor:'pointer'}} />]
        },
        {
            id:21,
            name:"vaibhav21",
            email:"vaibhav@gmail.com",
            age:'25',
            action:[<MdEdit title='Edit' style={{marginRight:'20px',cursor:'pointer'}} />,<RiDeleteBin6Line title='Delete' style={{cursor:'pointer'}} />]
        },
        {
            id:22,
            name:"vaibhav22",
            email:"vaibhav2@gmail.com",
            age:'55',
            action:[<MdEdit title='Edit' style={{marginRight:'20px',cursor:'pointer'}} />,<RiDeleteBin6Line title='Delete' style={{cursor:'pointer'}} />]
        },
        {
            id:23,
            name:"vaibhav23",
            email:"vaibhav3@gmail.com",
            age:'65',
            action:[<MdEdit title='Edit' style={{marginRight:'20px',cursor:'pointer'}} />,<RiDeleteBin6Line title='Delete' style={{cursor:'pointer'}} />]
        },
        {
            id:24,
            name:"vaibhav24",
            email:"vaibhav4@gmail.com",
            age:'75',
            action:[<MdEdit title='Edit' style={{marginRight:'20px',cursor:'pointer'}} />,<RiDeleteBin6Line title='Delete' style={{cursor:'pointer'}} />]
        },
        {
            id:25,
            name:"vaibhav25",
            email:"vaibhav5@gmail.com",
            age:'85',
            action:[<MdEdit title='Edit' style={{marginRight:'20px',cursor:'pointer'}} />,<RiDeleteBin6Line title='Delete' style={{cursor:'pointer'}} />]
        }
       ];
       const[records,setRecords] = useState(stockData)
       function handleFilter(event)
       {
            if(event.target.value !== '')
            {
                const newData = stockData.filter(row=>{
                    return row.name.toLowerCase().includes(event.target.value.toLowerCase())
                });
        
                setRecords(newData);
            }
            else{
                setRecords(stockData);
            }
           
    
       }

    const exportPDF =()=>{

    }

    return(
        <>
            <h1>Data Table</h1>
            <button onClick={downloadCSV}>export</button>
            <button onClick={exportPDF}>pdf</button>
            <div className="text-end"><input type="text" placeholder="search" onChange={handleFilter} /></div>
            {/* <DataTable data={tableData} columns={tableColumns} expandableRows actions/> */}
            <DataTable 
               
                data={records}   //for rows
                columns={columns}  //for colums 
                //actions 
                selectableRows  //for checkboxes
                fixedHeader   //to fix header
                pagination    //for pagination
                highlightOnHover // for on hover
                customStyles={customStyles}   //to handle height,width,margin,padding for row and colum,header color
                //conditionalRowStyles={conditionalRowStyles} 
               
                //sortIcon={sortIcon}    //for icon
                
                //theme="solarized"    //for background color
               
            />
           
        </>
    )
}

export default Datatable;