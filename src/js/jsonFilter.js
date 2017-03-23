import {store} from "./store.js";
import {filter} from "lodash";

const jsonFilter = {
  filter: (speciesToFilter) => {
    return new Promise(function (resolve, reject) {
      $("#paginator").jPages("destroy");

      // require.ensure(".js", function(require) {
      //   console.log("");
      // }, "bundleName");
      
      // debugger
      store.state.message = filter(store.state.message, {
        species: speciesToFilter
      });

      resolve(store.state.message);
      // reject(Error("error"));

    }).then(function (resolved) {
      // success
      console.log("resolved"); 
      return store.state.message;
      
    }, function (err) {
      console.log(err); // error
    });
  },
  filterId: (idToFilter) => {
    store.state.filteredId = filter(store.state.message, {
      id: idToFilter
    });
    console.log(store.state.filteredId);
  }
};

export {jsonFilter};