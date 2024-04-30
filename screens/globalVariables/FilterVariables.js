const variables = {
    "isVerified":'-1',
    "lowAge":'18',
    "highAge":'100',
    "appPurpose":'-1',
    "has_a_bio":'-1'
  }
  
  export function updateFilterVariables(field, newValue){
    variables[field] = newValue;
  }
  
  export function getFilterVariables() {
    return variables;
  }

  export function resetFilterVariables(){
    variables["isVerified"] = "-1";
    variables["lowAge"] = "18";
    variables["highAge"] = "100";
    variables["appPurpose"] = "-1";
    variables["has_a_bio"] = "-1";
  }