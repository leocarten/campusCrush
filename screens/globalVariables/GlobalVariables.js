// we need to calculate age on the fly, based on their birthday
const variables = {
  "username":"",
  "password":"",
  "firstname":"",
  "birthday":"",
  "bio":"",
  "gender":"",
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
  "lat":0,
  "long_":0,
  "base64":""
}

export function updateGlobalVariables(field, newValue){
  variables[field] = newValue;
}

export function getVariables() {
  return variables;
}