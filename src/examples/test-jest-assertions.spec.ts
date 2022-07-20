describe('assertion primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;
    expect(number).toBe(10);
    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();
    expect(number).toBeLessThan(12);
    expect(number).toBeGreaterThan(9);
    expect(number).toBeGreaterThanOrEqual(10);
    expect(number).toBeLessThanOrEqual(13);
    expect(number).toBeCloseTo(10.0005);
    expect(number).toHaveProperty('toFixed');
  });
});

describe('assertion objects', () => {
  it('should test jest  witch objects', () => {
    const person = { name: 'Gustavo', age: 17 };
    const otherPerson = { ...person };

    expect(person).toEqual(otherPerson);
    expect(person).toHaveProperty('name', 'Gustavo');
    expect(person).not.toHaveProperty('lastName');
    expect(person.name).toBe('Gustavo');
  });
});
