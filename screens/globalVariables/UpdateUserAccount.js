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
    "ideal_first_meetup":""
  }
  
  export function updateUserVariables(field, newValue){
    variables[field] = newValue;
  }
  
  export function getVariablesFromUserUpdate() {
    return variables;
  }