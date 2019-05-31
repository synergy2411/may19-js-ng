describe("Suite 1", function(){

    it("Should be pass", function(){
        expect(true).toBeTruthy();
    })
  
    it("Should be fail", function(){
        expect("Hello World").toContain("Angular");
    })
    

})