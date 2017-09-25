import { getTimeAgoLabel } from './../../utils/time';

describe('Time', () => {
  describe('Time ago function', () => {
    it('should return "just now" for messegae that was added less then 1 minute', async () => {
      const message = 'just now';
      const SECOND = 1000;
      const TEN_SECOND = 10000;
      const MINUTE = 60000;
      const MORE_MINUTE = 70000;

      expect(getTimeAgoLabel(Date.now())).toBe(message);
      expect(getTimeAgoLabel(Date.now() - SECOND)).toBe(message);
      expect(getTimeAgoLabel(Date.now() - TEN_SECOND)).toBe(message);
      expect(getTimeAgoLabel(Date.now() - MINUTE)).toBe(message);
      expect(getTimeAgoLabel(Date.now() - MORE_MINUTE)).not.toContain(message);
    });

    it('should return "1 minute", "2 minute", ... for messegae that was added less then 1 hour', async () => {
      const message = ' minutes ago';
      const ONE_MINUTE = 70000;
      const TWO_MINUTE = 130000;
      const MORE_MINUTE = ONE_MINUTE * Number('60');

      expect(getTimeAgoLabel(Date.now() - ONE_MINUTE)).toBe(`1${message}`);
      expect(getTimeAgoLabel(Date.now() - TWO_MINUTE)).toBe(`2${message}`);
      expect(getTimeAgoLabel(Date.now() - MORE_MINUTE)).not.toContain(message);
    });

    it('should return "1 hour", "2 hour", ... for messegae that was added less then 1 day', async () => {
      const message = ' hours ago';
      const ONE_HOUR = 60 * 1000 * 60 + 1; // eslint-disable-line
      const TWO_HOUR = 2 * 60 * 1000 * 60 + 1; // eslint-disable-line
      const MORE_HOUR = 24 * 60 * 1000 * 60 + 1; // eslint-disable-line

      expect(getTimeAgoLabel(Date.now() - ONE_HOUR)).toBe(`1${message}`);
      expect(getTimeAgoLabel(Date.now() - TWO_HOUR)).toBe(`2${message}`);
      expect(getTimeAgoLabel(Date.now() - TWO_HOUR * '2')).toBe(`4${message}`);
      expect(getTimeAgoLabel(Date.now() - MORE_HOUR)).not.toContain(message);
    });

    it('should return "1 day", "2 days", ... for messegae that was added less then 1 week', async () => {
      const message = ' days ago';
      const ONE_DAY = 24 * 60 * 1000 * 60 + 1; // eslint-disable-line
      const TWO_DAY = 2 * 24 * 60 * 1000 * 60 + 1; // eslint-disable-line
      const MORE_DAYS = 7 * 24 * 60 * 1000 * 60 + 1; // eslint-disable-line

      expect(getTimeAgoLabel(Date.now() - ONE_DAY)).toBe(`1${message}`);
      expect(getTimeAgoLabel(Date.now() - TWO_DAY)).toBe(`2${message}`);
      expect(getTimeAgoLabel(Date.now() - MORE_DAYS)).not.toContain(message);
    });

    it('should return "1 weeks", "2 weeks", ... for messegae that was added less then 1 month', async () => {
      const message = ' weeks ago';
      const ONE_WEEK = 7 * 24 * 60 * 1000 * 60 + 1; // eslint-disable-line
      const TWO_WEEK = 2 * 7 * 24 * 60 * 1000 * 60 + 1; // eslint-disable-line
      const MORE_WEEKS = 6 * 7 * 24 * 60 * 1000 * 60 + 1; // eslint-disable-line

      expect(getTimeAgoLabel(Date.now() - ONE_WEEK)).toBe(`1${message}`);
      expect(getTimeAgoLabel(Date.now() - TWO_WEEK)).toBe(`2${message}`);
      expect(getTimeAgoLabel(Date.now() - MORE_WEEKS)).not.toContain(message);
    });

    it('should return "1 month", "2 month", ... for messegae that was added less then 1 year', async () => {
      const message = ' months ago';
      const ONE_MONTH = 6 * 7 * 24 * 60 * 1000 * 60 + 1; // eslint-disable-line
      const TWO_MONTH = 10 * 7 * 24 * 60 * 1000 * 60 + 1; // eslint-disable-line
      const MORE_MONTH = 100 * 7 * 24 * 60 * 1000 * 60 + 1; // eslint-disable-line

      expect(getTimeAgoLabel(Date.now() - ONE_MONTH)).toBe(`1${message}`);
      expect(getTimeAgoLabel(Date.now() - TWO_MONTH)).toBe(`2${message}`);
      expect(getTimeAgoLabel(Date.now() - MORE_MONTH)).not.toContain(message);
    });

    it('should return date for bigger dates', async () => {
      const MORE_MONTH = 100 * 7 * 24 * 60 * 1000 * 60 + 1; // eslint-disable-line

      expect(getTimeAgoLabel(Date.now() - MORE_MONTH)).toBe((new Date(Date.now() - MORE_MONTH)).toLocaleDateString());
    });
  });
});
