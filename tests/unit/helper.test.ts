import { getNameInitials } from '$lib/helper/getNameInitials';
import { describe, it, expect } from 'vitest';

describe('getNameInitials', () => {
	it('returns correct initials', () => {
		expect(getNameInitials('Ajoy Kumar', 'Das')).toBe('AD');
	});
});
