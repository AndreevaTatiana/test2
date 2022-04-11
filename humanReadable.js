function humanReadable (seconds) {
        if (seconds < 60) {
            return `00:00:${getTwoSymbols(seconds)}`
        } else if (seconds >= 60 && seconds < 3600) {
            let min = Math.floor(seconds/60);
            let sec = seconds - (min*60);
            return `00:${getTwoSymbols(min)}:${getTwoSymbols(sec)}`
        } else if (seconds >= 3600 && seconds <= 359999) {
            let hour = Math.floor(seconds/3600);
            //console.log(hour );
            let min =  Math.floor((seconds - (hour*3600))/60); 
            let sec = seconds - (hour*3600) - (min*60);
            return  `${getTwoSymbols(hour)}:${getTwoSymbols(min)}:${getTwoSymbols(sec)}`
        }
        function getTwoSymbols (num) {
            if (String(num).length < 2) {
                return  String(num).padStart(2, "0")
            }  
            return num    
        }
    
  }


  