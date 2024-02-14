/* Change JS Pairing
 *
 * For this pairing exercise, we will work together to implement three functions:
 * `getOpinionsByFood`
 * `getFoodsByOpinion`
 * `fetchFoods`
 * 
 * For each function, there are one or more existing test cases that will pass 
 * when the function behaves as desired. You can use the "Run" button in the upper
 * left corner to run the test suite.
*/

///////////////////////////////////////////
///////////////// PART 1 //////////////////

/**
 * A function that takes a list of foods and the corresponding opinion for that food,
 * and returns an object with keys that are names of foods and values that 
 * represent the opinion for that food.
 * 
 * @param {[string, string][]} listOfFoodAndOpinions 
 * An array of [food, opinion] tuples.
 * @return {Object<string, string>}
 * A mapping of foods to the opinion for that food.
 */
function getOpinionsByFood(listOfFoodAndOpinions) {
    ///////////////////////////////////////////
    ////////////// IMPLEMENT ME ///////////////
  
    // Implement this function so that the below test passes
  }
  
  describe('getOpinionsByFood', () => {
    it('should map foods to their corresponding opinions', () => {
      expect(
        getOpinionsByFood([
          ["apples", "delicious"],
          ["bananas", "delicious"],
          ["cauliflower", "meh"]
        ])
      ).toStrictEqual(
        {
          apples: "delicious",
          bananas: "delicious",
          cauliflower: "meh"
        }
      );
    });
  });
  
  ///////////////////////////////////////////
  ///////////////// PART 2 //////////////////
  
  /**
   * A function that takes a list of foods and the corresponding opinion for that food,
   * and returns an object with keys that are opinions and values that are
   * foods corresponding to that opinion.
   * 
   * @param {[string, string][]} listOfFoodAndOpinions 
   * An array of [food, opinion] tuples.
   * @return {Object<string, string[]>}
   * A mapping of opinions to foods corresponding to that opinion.
   */
  function getFoodsByOpinion(listOfFoodAndOpinions) {
    ///////////////////////////////////////////
    ////////////// IMPLEMENT ME ///////////////
  
    // Implement this function so that the below test passes
  }
  
  describe.skip('getFoodsByOpinion', () => {
    it('should map opinions to their corresponding foods', () => {
      expect(
        getFoodsByOpinion([
          ["apples", "delicious"],
          ["bananas", "delicious"],
          ["cauliflower", "meh"]
        ])
      ).toStrictEqual(
        {
          delicious: ["apples", "bananas"],
          meh: ["cauliflower"]
        }
      );
    });
  });
  
  
  ///////////////////////////////////////////
  ///////////////// PART 3 //////////////////
  
  /**
   * A function that asynchronously gets a list of [food, opinion] pairs.
   * maxFoods can be used to specify the maximum number of pairs to return.
   * 
   * This function should not be modified for this exercise—you should implement
   * fetchFoods, which will call this function.
   * 
   * @param {number} maxFoods 
   * The maximum number of [food, opinion] pairs to retrieve.
   * @return {Promise<[string, string][]>}
   * An promise that resolves to an array of [food, opinion] tuples.
   * @throws Will throw an error if maxFoods is less than 1
   */
  function getFoodsFromApi(maxFoods) {
    ///////////////////////////////////////////
    ////////////// DON'T MODIFY ME ////////////
    // Implement fetchFoods below so that the test cases pass
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (maxFoods < 1) {
          reject(new Error('Can only request 1 or more food'));
        } else {
          resolve(
            [
              ["apples", "delicious"],
              ["bananas", "delicious"],
              ["cauliflower", "meh"]
            ].slice(0, maxFoods)
          );
        }
      }, 50);
    });
  }
  
  /**
   * A function that asynchronously gets a list of [food, opinion] pairs using getFoodsFromapi.
   * This function performs some additional error handling that is not implemented in getFoodsFromApi.
   * 
   * 
   * @param {number} maxFoods 
   * The maximum number of [food, opinion] pairs to retrieve.
   * @param {number} timeout 
   * A duration in milliseconds that indicates that the function should
   * return an error message if getFoodsFromApi takes longer than the specified timeout.
   * @return {(Promise<[string, string][]|{ message: string }>)}
   * An promise that resolves to an array of [food, opinion] tuples or a
   * message indicating that something went wrong.
   */
  function fetchFoods(maxFoods = 10, timeout = 1000) {
    ///////////////////////////////////////////
    ////////////// IMPLEMENT ME ///////////////
  
    // Use getFoodsFromApi with additional error handling logic
    // so that the test cases below all pass.
  }
  
  describe.skip('fetchFoods', () => {
    it('fetches the expected number of foods', async () => {
      expect(await fetchFoods(2)).toStrictEqual(
        [
          ["apples", "delicious"],
          ["bananas", "delicious"],
        ]
      );
    });
    
    it('returns an error in the appropriate format when the fetch fails', async () => {
      expect(await fetchFoods(-1)).toStrictEqual({
          message: 'Can only request 1 or more food',
      });
    });
    
    it('returns an error in the appropriate format when the fetch times out', async () => {
      expect(await fetchFoods(2, 25)).toStrictEqual({
        message: 'Fetch timed out',
      });
    });
  });