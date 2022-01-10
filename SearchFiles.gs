function searchFiles(file_name, folder){
  var search_for = 'title contains "' + file_name + '"';
  var files = folder.searchFiles(search_for);

  if(files.hasNext()){
    return false;
  }else{
    return true;
  }
}
