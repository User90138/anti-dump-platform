#[cfg(test)]
mod tests {
    use anchor_lang::prelude::*;
    use claim_program;

    #[test]
    fn test_claim_tokens() {
        // TODO: Реализовать тесты для программы заявок
        let amount = 1000;
        assert_eq!(amount * 70 / 100, 700); // Проверка распределения
        assert_eq!(amount * 25 / 100, 250);
        assert_eq!(amount * 5 / 100, 50);
    }
}
