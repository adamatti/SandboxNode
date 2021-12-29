describe('proxy tests', ()=> {
  it('happy path', ()=>{
    // given
    const user = {name: 'marcelo'};
    const getfn = jest.fn();
    const setfn = jest.fn();

    // when
    const proxy = new Proxy(user, {
      get: (obj, prop) => {
        getfn(obj, prop);
      },
      set: (obj, prop, value) => {
        setfn(obj, prop, value);
        Reflect.set(obj, prop, value);
      },
    });
    proxy.name = 'Adamatti';
    console.log('Name: ', proxy.name);

    // then
    expect(getfn).toHaveBeenCalledTimes(1);
    expect(getfn).toHaveBeenCalledWith(user, 'name');
    expect(setfn).toHaveBeenCalledTimes(1);
    expect(setfn).toHaveBeenCalledWith(user, 'name', 'Adamatti');
  });
});
