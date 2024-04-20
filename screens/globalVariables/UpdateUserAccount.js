// we need to calculate age on the fly, based on their birthday
const variables = {
    "bio":"",
    "bucket_list":"",
    "interests_hobbies":[],
    "music_preference":[],
    "pet_preference":"",
    "app_purpose":"",
    "wants_to_be_shown":"",
    "has_tattoos":"",
    "sleep_schedule":"",
    "win_my_heart":"",
    "job":"",
    "workout":"",
    "communication_style":"",
    "ideal_first_meetup":"",
    "image_data":""
  }
  
  export function updateUserVariables(field, newValue){
    variables[field] = newValue;
  }
  
  export function getVariablesFromUserUpdate() {
    return variables;
  }

  export function resetValues(){
    variables["bio"] = "";
    variables["bucket_list"] = "";
    variables["interests_hobbies"] = [];
    variables["music_preference"] = [];
    variables["pet_preference"] = "";
    variables["app_purpose"] = "";
    variables["wants_to_be_shown"] = "";
    variables["has_tattoos"] = "";
    variables["sleep_schedule"] = "";
    variables["win_my_heart"] = "";
    variables["job"] = "";
    variables["workout"] = "";
    variables["communication_style"] = "";
    variables["ideal_first_meetup"] = "";
    variables["image_data"] = "";
  }