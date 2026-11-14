import { describe, expect, it } from 'vitest';
import { tagMatches, textMatches } from './match';

describe('textMatches', () => {
	it('does not treat a short stem as part of another word', () => {
		expect(textMatches('Lean thinking reduces waste and focuses on the essentials.', 'ties')).toBe(
			false
		);
		expect(textMatches('product-related activities', 'ties')).toBe(false);
	});

	it('matches a word with the same stem', () => {
		expect(textMatches('create value during a Sprint.', 'values')).toBe(true);
	});

	it('matches a phrase as written', () => {
		expect(textMatches('the Product Backlog is ordered', 'product backlog')).toBe(true);
	});
});

describe('tagMatches', () => {
	it('matches one word of a camel-case tag', () => {
		expect(tagMatches('ProductBacklog', 'backlog')).toBe(true);
		expect(tagMatches('Accountabilities', 'ties')).toBe(false);
	});
});
