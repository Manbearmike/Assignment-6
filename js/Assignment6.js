function CreateCustomer()
{     var objRequest = new XMLHttpRequest();
        var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/CreateCustomer"; //Collect Customer data from web page
        var customerid = document.getElementById("custid").value;
        var customername = document.getElementById("custname").value;//Create name variable
        var customerCity = document.getElementById("custCity").value;//create city variable
        var newcustomer = '{"CustomerID":"' + customerid + '","CompanyName":"' + customername + '","City":"' + customerCity + '"}';
        //Checking for AJAx operation return
        objRequest.onreadystatechange = function()
        {         if (objRequest.readyState == 4 && objRequest.status == 200)
        {             var result = JSON.parse(objRequest.responseText);
                        OperationResult(result);         }
}          //Start AJAX request
                        objRequest.open("POST", url, true);
                        objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        objRequest.send(newcustomer);   }
function OperationResult(output)
{
if (output.WasSuccessful == 1)
    { document.getElementById("result").innerHTML = "The operation was successful!" }
    else
    { document.getElementById("result").innerHTML = "The operation was not successful!" + "<br>" + output.Exception;}}
    
////////////////////////////////////////////////////////////////////////////////
function UpdateOrderAddress()
{     var objRequest = new XMLHttpRequest();
        var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/updateOrderAddress"; //Collect Customer data from web page
        var orderID = document.getElementById("orderNum").value;
        var shippingAddress = document.getElementById("shiptoAddress").value;
        var shippingCity = document.getElementById("shiptoCity").value;
        var shippingName = document.getElementById("shiptoName").value;
        var shippingZip = document.getElementById("shiptoZip").value;   
        var AddressInfo = '{"OrderID":"' + orderID + '","ShipAddress":"' + shippingAddress + '","ShipName":"' + shippingName +
        '","ShipCity":"' + shippingCity + '","ShipPostcode":"' + shippingZip + '"}';
        //Checking for AJAx operation return
        objRequest.onreadystatechange = function()
        {         if (objRequest.readyState == 4 && objRequest.status == 200)
        {             var Addressresult = JSON.parse(objRequest.responseText);
                        AddressOperationResult(Addressresult);         }
                        }          //Start AJAX request
                        objRequest.open("POST", url, true);
                        objRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                        objRequest.send(AddressInfo);   }
function AddressOperationResult(output)
{
if (output == 1)
    { document.getElementById("Addressresult").innerHTML = "The operation was successful!" }
    else  
    { document.getElementById("Addressresult").innerHTML = "The operation was not successful!" + "<br>" + output;}}
    
////////////////////////////////////////////////////////////////////////////////
function DeleteCustomers() //getOrdersForCustomer Called by Button
{   var objRequest = new XMLHttpRequest();
    //Create AJAX request object
    //Create URL and Query string
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/deleteCustomer/";
    url += document.getElementById("customerDeletion").value;
    //Checks that the object has returned data
    objRequest.onreadystatechange = function()
{         if (objRequest.readyState == 4 && objRequest.status == 200)
{         var Deletionoutput = JSON.parse(objRequest.responseText);
         deleteCustomerInfo(Deletionoutput);
}
}   //Initiate the server request
    objRequest.open("GET", url, true);
    objRequest.send(); }
    
    function deleteCustomerInfo(Deletionoutput)
{
if (Deletionoutput.WasSuccessful == 1)
    { document.getElementById("deleteCustomerStatus").innerHTML = "The operation was successful!" }
    else
    { document.getElementById("deleteCustomerStatus").innerHTML = "The operation was not successful!" + "<br>" + Deletionoutput;}}
    
//////////////////////////////////////////////////END SECTION CUSTOMER HISTORY///////////////////////////////////////////   


    
///////////////////////SECTION VISIBILITY//////////////////////////////    
function MenuChoice()
{     if (document.getElementById("SectionMenu").value == "Display The First Section")
{         document.getElementById("FirstSection").style.visibility = "visible";
            document.getElementById("SecondSection").style.visibility = "hidden";
            document.getElementById("ThirdSection").style.visibility = "hidden";
}
    else if (document.getElementById("SectionMenu").value == "Display The Second Section")
{         document.getElementById("FirstSection").style.visibility = "hidden";
            document.getElementById("SecondSection").style.visibility = "visible";
            document.getElementById("ThirdSection").style.visibility = "hidden";
            }
    else if (document.getElementById("SectionMenu").value == "Display The Third Section")
{         document.getElementById("FirstSection").style.visibility = "hidden";
            document.getElementById("SecondSection").style.visibility = "hidden";
            document.getElementById("ThirdSection").style.visibility = "visible";
            }
            else
            {       document.getElementById("FirstSection").style.visibility = "hidden";
                    document.getElementById("SecondSection").style.visibility = "hidden";
                    document.getElementById("ThirdSection").style.visibility = "hidden";
            } }    

