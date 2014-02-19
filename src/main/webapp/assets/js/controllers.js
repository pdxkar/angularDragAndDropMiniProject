'use strict';
/**
 * Controller for loading all the books
 */
myApp.controller('BookListCtrl', [ '$scope', 'Books', 
         function($scope, Books) {
			// Controller magic
			$scope.books = Books.query();
			
} ]);

