// Setup
const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    console.log(records[id].hasOwnProperty("tracks")) //hasOwnProperty - obeject에 property있는지 확인 
    if (value ==="") delete records[id][prop];
    else if(prop !== "tracks") records[id][prop] = "value"
    else if(records[id].hasOwnProperty[prop]) {
      records[id][prop].push(value);
      }
    else records[id][prop] = [value]
    // return console.log(records);
  }
//   recordCollection[5439]["artist"] = "value"
//   console.log(recordCollection)
  
//   updateRecords(recordCollection, 5439, 'artist', 'ABBA');
updateRecords(recordCollection, 2468, "tracks", "Free")
  