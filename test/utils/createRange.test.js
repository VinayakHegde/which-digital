import crteateRange from "../../src/utils/createRange";

describe('createRange', () => {
  it('should throw TypeError for empty/wrong options', () => {
    const cr1 = () => crteateRange();
    expect(cr1).toThrowError(TypeError);

    const cr2 = () => crteateRange({});
    expect(cr2).toThrowError(TypeError);

    const cr3 = () => crteateRange({to: 'abc', from: 'xyz' });
    expect(cr3).toThrowError(TypeError);
  });

  it('should throw RangeError when from is greater than to', () => {
    const cr = () => crteateRange({to: 10, from: 11 });
    expect(cr).toThrowError(RangeError);
  });

  it('should throw Error when from is greater than to', () => {
    const cr = () => crteateRange({to: 10, from: 0 });
    expect(cr).toThrowError(Error);
  });

  it('should create the array of range provided', () => {
    const cr = crteateRange({to: 10, from: 1 });
    expect(cr.length).toEqual(10);
    expect(cr.toString()).toEqual('1,2,3,4,5,6,7,8,9,10');
  });
});