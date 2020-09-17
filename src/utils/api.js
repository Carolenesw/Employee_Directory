import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=25&nat=us";

// make api call to get user employee listing
export default {
    userSearch: function() {
        return axios.get(BASEURL);
    }
};