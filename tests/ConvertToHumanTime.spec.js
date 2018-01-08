import { expect } from 'chai';
import convertToHumanTime from '../src/ConvertToHumanTime';

describe('ConvertToHumanTime', () => {
  it('should exist', () => {
    expect(convertToHumanTime).to.exist;
  });
  it('should receive 0ms and convert to 0:00', () => {
    expect(convertToHumanTime(0)).to.be.equal('0:00');
  });
  it('should receive 1000ms and convert to 0:01', () => {
    expect(convertToHumanTime(1000)).to.be.equal('0:01');
  });
  it('should receive 10000ms and convert to 0:10', () => {
    expect(convertToHumanTime(10000)).to.be.equal('0:10');
  });
  it('should receive 60000ms and converto to 1:00', () => {
    expect(convertToHumanTime(60000)).to.be.equal('1:00');
  });
});
