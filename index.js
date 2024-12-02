    function searchDoctors() 
    { 
        var searchInput = document.getElementById('searchInput').value.toLowerCase(); 
        var doctorList = document.getElementById('doctorList'); 
        var doctors = doctorList.getElementsByTagName('li'); 
 
        for (var i = 0; i < doctors.length; i++) 
            { 
            var doctorName = doctors[i].getElementsByTagName('h3')[0].innerText.toLowerCase(); 
 
            if (doctorName.includes(searchInput)) 
            { 
                doctors[i].style.display = ''; 
            } else { 
                doctors[i].style.display = 'none'; 
            } 
        } 
    } 
