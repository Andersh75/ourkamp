'use strict';  


var RequestCanvas = prepareRequestCanvas(
    'https://kth.instructure.com/api/v1'
);


function prepareRequestCanvas(baseUrl) {
    return(relUrlObj) => {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open('GET', baseUrl + '/' + relUrlObj.area + '/' + relUrlObj.areaId + '/' + relUrlObj.what + '?per_page=' + relUrlObj.perPage + '&access_token=' + relUrlObj.token);
            request.responseType = 'application/json';
            request.send();
            //console.log(baseUrl + '/' + relUrl);
            request.onload = () => resolve(JSON.parse(request.response));
        })
    };
};



document.addEventListener("DOMContentLoaded", function () {


    var canvasData = {};
    let searchObj = {
        area: "users",
        areaId: "5091",
        what: "courses",
        perPage: "100",
        token: "8779~3LmsZZse4dRnHvdnYBRt69Yc5dTFDApw1FlZCP49T4o6xIDsVXrKZ122VQFiopCh"
    }
    RequestCanvas(searchObj).then((objs) => {

        canvasData = objs;

        alert(canvasData[0].id);

        canvasData.forEach(function(item) {
            let searchObj = {
                area: "courses",
                areaId: item.id,
                what: "group_categories",
                perPage: "100",
                token: "8779~3LmsZZse4dRnHvdnYBRt69Yc5dTFDApw1FlZCP49T4o6xIDsVXrKZ122VQFiopCh"
            }
            RequestCanvas(searchObj).then((objs) => {

                //console.log(objs);
                // let newArr = objs.filter(function(obj){
                //     return obj[0] !== undefined;
                //  });

                //  let newArr = objs.filter(function(el) {
                //     // keep element if it's not an object, or if it's a non-empty object
                //     return typeof el != "object" || Array.isArray(el) || Object.keys(el).length > 0;
                // });

                // item.group_categories = newArr;


                //console.log(JSON.stringify(item.group_categories));

                //alert(item.group_categories[0].id);
    
                item['group_categories'].forEach(function(subItem) {
                    let searchObj = {
                        area: "group_categories",
                        areaId: subItem.id,
                        what: "groups",
                        perPage: "100",
                        token: "8779~3LmsZZse4dRnHvdnYBRt69Yc5dTFDApw1FlZCP49T4o6xIDsVXrKZ122VQFiopCh"
                    }
                    RequestCanvas(searchObj).then((objs) => {

                        subItem.groups = objs;

                        

                        
                        subItem.groups.forEach(function(subSubItem) {
                            let searchObj = {
                                area: "groups",
                                areaId: subSubItem.id,
                                what: "users",
                                perPage: "100",
                                token: "8779~3LmsZZse4dRnHvdnYBRt69Yc5dTFDApw1FlZCP49T4o6xIDsVXrKZ122VQFiopCh"
                            }
                            RequestCanvas(searchObj).then((objs) => {
                                
                                subSubItem.users = objs;
                            }).catch(function() {
                                console.log("FEL");
                            });
                        });
                        
        
                    });
                });
                
    
    
    
            }).catch(function() {
                console.log("FEL");
            });

    

        });


        

        


        console.log(canvasData);

    }).catch(function() {
        console.log("FEL");
    });

    

    


});