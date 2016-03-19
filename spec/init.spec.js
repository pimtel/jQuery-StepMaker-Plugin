var $ = jQuery;

describe("jQuery dependency", function () {
  it("should load jquery", function () {
    expect($).not.toBeUndefined();
  });
});

describe("Load Step-Maker", function () {
  it("should set stepMaker on jquery 'fn'", function () {
    expect($.fn.stepMaker).not.toBeUndefined();
  });
});
