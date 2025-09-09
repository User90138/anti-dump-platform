use anchor_lang::prelude::*;

declare_id!("G7H9bWj8k3Yk9k1z2f3Yk9k1z2f3Yk9k1z2f3Yk9k1z");

#[program]
pub mod fee_collector {
    use super::*;

    pub fn collect_fee(ctx: Context<CollectFee>, amount: u64) -> Result<()> {
        let fee_account = &mut ctx.accounts.fee_account;
        // TODO: Реализовать сбор комиссий
        msg!("Сбор {} комиссии", amount);
        Ok(())
    }

    pub fn withdraw_fee(ctx: Context<WithdrawFee>, amount: u64) -> Result<()> {
        // TODO: Реализовать вывод комиссий с мульти-подписью
        msg!("Вывод {} комиссии", amount);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct CollectFee<'info> {
    #[account(mut)]
    pub fee_account: AccountInfo<'info>,
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct WithdrawFee<'info> {
    #[account(mut)]
    pub fee_account: AccountInfo<'info>,
    // TODO: Добавить аккаунты для мульти-подписи
    pub system_program: Program<'info, System>,
}
