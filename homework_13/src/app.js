const blog = angular.module('blog', []);
blog.controller('appctrl', ['$scope',
  function($scope) {
    let add = true;
    let arrayofCategories = ['All'];
    let edit = true;
    let error = false;
    let disabled = true;
    let hidden = false;


    $scope.addNewPost = (newTitle, newCategories, newDescription, newUrl) => {
      let newCategoriesIns = newCategories.split(/[ ,]+/);
      $scope.add = false;
      if(!newUrl){
        newUrl = './assets/angularjs.jpeg';
      }
          $scope.posts.unshift(
            {
              title: newTitle,
              description: newDescription,
              categories: newCategoriesIns,
              src: newUrl
            }
          )
      $scope.categoriesList(newCategoriesIns);
    }

    $scope.categoriesList = () => {
      $scope.posts.forEach(item =>
        item.categories.forEach(el => {
          if (arrayofCategories.indexOf(el) === -1) {
            arrayofCategories.push(el);
          }
        }))
      return arrayofCategories;
    }

    $scope.searchCategories = (category) => {
      if(category === 'All') {
        $scope.defaultPosts = $scope.posts;
        return;
      } else {
        $scope.defaultPosts = [];
        $scope.posts.forEach(el => {
          if(el.categories.indexOf(category) !== -1) {
            $scope.defaultPosts.push(el);
            return;
          }
        })

      }
    }

    $scope.posts = defaultPosts;
    $scope.defaultPosts = $scope.posts;
    $scope.categories = $scope.categoriesList();


  }
])

