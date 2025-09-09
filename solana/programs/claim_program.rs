use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod claim_program {
    use super::*;

    pub fn claim_tokens(ctx: Context<ClaimTokens>, amount: u64) -> Result<()> {
        let user = &mut ctx.accounts.user;
        let lp_account = &mut ctx.accounts.lp_account;
        let fee_account = &mut ctx.accounts.fee_account;

        let lp_amount = amount * 25 / 100;
        let fee_amount = amount * 5 / 100;
        let recipient_amount = amount - lp_amount - fee_amount;

        // TODO: Реализовать перевод токенов: recipient_amount → user, lp_amount → lp_account, fee_amount → fee_account
        msg!("Заявка: {} токенов, {} в пул, {} в комиссии", amount, lp_amount, fee_amount);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct ClaimTokens<'info> {
    #[account(mut)]
    pub user: Signer<'info>,
    #[account(mut)]
    pub lp_account: AccountInfo<'info>,
    #[account(mut)]
    pub fee_account: AccountInfo<'info>,
    pub system_program: Program<'info, System>,
}
