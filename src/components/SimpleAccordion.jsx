import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function SimpleAccordion() {
  return (
    <div className="">
      <div className="tit">
        <p>Часто задаваемые вопросы?</p>
      </div>
      <Accordion className="section-1">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="section-1__title">
            <p>Как сделать заказ?</p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h3>
              {" "}
              РУП "Белпочта" осуществляет доставку двумя способами: 1. Обычная
              доставка. При данном виде доставки вы получаете посылку в своем
              почтовом отделении. Время доставки — от 3 до 7 дней. Обычная
              стоимость составляет 6 рублей, для предметов стоимостью от 60
              рублей и выше стоимость доставки составляет 8 рублей. 2.
              Экспресс-доставка. Этот вид ускоренной почты обеспечивает доставку
              заказа адресату на дом, на следующий рабочий день после
              отправления заказа. Стоимость доставки — всегда 230coм За отправку
              денежного перевода РУП "Белпочта" ничего не взимает. В течение 10
              дней посылка на вашем почтовом отделении хранится бесплатно. Затем
              за каждый день хранения вы платите пеню в размере 200 сом. Если вы
              в течении 30 дней не заберете посылку, она отправится обратно к
              нам. Однако, если у вас нет возможности забрать посылку в
              30-дневный срок, вы можете уведомить почтовое отделение и продлить
              срока хранения. Оплата производится в белорусских рублях при
              получении посылки на почте. При получении заказа необходимо иметь
              при себе паспорт (или другой документ, удостоверяющий личность, на
              имя которого приходит посылка). В стоимость заказа входит
              стоимость вещей, стоимость доставки и упаковки. Чек об оплате,
              выданный почтой, является подтверждающим документом о покупке.
            </h3>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="section-1__title">
            <p>Способы оплаты?</p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h3>
              {" "}
              РУП "Белпочта" осуществляет доставку двумя способами: 1. Обычная
              доставка. При данном виде доставки вы получаете посылку в своем
              почтовом отделении. Время доставки — от 3 до 7 дней. Обычная
              стоимость составляет 6 рублей, для предметов стоимостью от 60
              рублей и выше стоимость доставки составляет 8 рублей. 2.
              Экспресс-доставка. Этот вид ускоренной почты обеспечивает доставку
              заказа адресату на дом, на следующий рабочий день после
              отправления заказа. Стоимость доставки — всегда 230coм За отправку
              денежного перевода РУП "Белпочта" ничего не взимает. В течение 10
              дней посылка на вашем почтовом отделении хранится бесплатно. Затем
              за каждый день хранения вы платите пеню в размере 200 сом. Если вы
              в течении 30 дней не заберете посылку, она отправится обратно к
              нам. Однако, если у вас нет возможности забрать посылку в
              30-дневный срок, вы можете уведомить почтовое отделение и продлить
              срока хранения. Оплата производится в белорусских рублях при
              получении посылки на почте. При получении заказа необходимо иметь
              при себе паспорт (или другой документ, удостоверяющий личность, на
              имя которого приходит посылка). В стоимость заказа входит
              стоимость вещей, стоимость доставки и упаковки. Чек об оплате,
              выданный почтой, является подтверждающим документом о покупке.
            </h3>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="section-1__title">
            <p>Сроки доставки?</p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h3>
              {" "}
              РУП "Белпочта" осуществляет доставку двумя способами: 1. Обычная
              доставка. При данном виде доставки вы получаете посылку в своем
              почтовом отделении. Время доставки — от 3 до 7 дней. Обычная
              стоимость составляет 6 рублей, для предметов стоимостью от 60
              рублей и выше стоимость доставки составляет 8 рублей. 2.
              Экспресс-доставка. Этот вид ускоренной почты обеспечивает доставку
              заказа адресату на дом, на следующий рабочий день после
              отправления заказа. Стоимость доставки — всегда 230coм За отправку
              денежного перевода РУП "Белпочта" ничего не взимает. В течение 10
              дней посылка на вашем почтовом отделении хранится бесплатно. Затем
              за каждый день хранения вы платите пеню в размере 200 сом. Если вы
              в течении 30 дней не заберете посылку, она отправится обратно к
              нам. Однако, если у вас нет возможности забрать посылку в
              30-дневный срок, вы можете уведомить почтовое отделение и продлить
              срока хранения. Оплата производится в белорусских рублях при
              получении посылки на почте. При получении заказа необходимо иметь
              при себе паспорт (или другой документ, удостоверяющий личность, на
              имя которого приходит посылка). В стоимость заказа входит
              стоимость вещей, стоимость доставки и упаковки. Чек об оплате,
              выданный почтой, является подтверждающим документом о покупке.
            </h3>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="section-1__title">
            <p> Как получит достовку?</p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h3>
              {" "}
              РУП "Белпочта" осуществляет доставку двумя способами: 1. Обычная
              доставка. При данном виде доставки вы получаете посылку в своем
              почтовом отделении. Время доставки — от 3 до 7 дней. Обычная
              стоимость составляет 6 рублей, для предметов стоимостью от 60
              рублей и выше стоимость доставки составляет 8 рублей. 2.
              Экспресс-доставка. Этот вид ускоренной почты обеспечивает доставку
              заказа адресату на дом, на следующий рабочий день после
              отправления заказа. Стоимость доставки — всегда 230coм За отправку
              денежного перевода РУП "Белпочта" ничего не взимает. В течение 10
              дней посылка на вашем почтовом отделении хранится бесплатно. Затем
              за каждый день хранения вы платите пеню в размере 200 сом. Если вы
              в течении 30 дней не заберете посылку, она отправится обратно к
              нам. Однако, если у вас нет возможности забрать посылку в
              30-дневный срок, вы можете уведомить почтовое отделение и продлить
              срока хранения. Оплата производится в белорусских рублях при
              получении посылки на почте. При получении заказа необходимо иметь
              при себе паспорт (или другой документ, удостоверяющий личность, на
              имя которого приходит посылка). В стоимость заказа входит
              стоимость вещей, стоимость доставки и упаковки. Чек об оплате,
              выданный почтой, является подтверждающим документом о покупке.
            </h3>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className="section-1__title">
            <p>Как сделать возврат?</p>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <h3>
              {" "}
              РУП "Белпочта" осуществляет доставку двумя способами: 1. Обычная
              доставка. При данном виде доставки вы получаете посылку в своем
              почтовом отделении. Время доставки — от 3 до 7 дней. Обычная
              стоимость составляет 6 рублей, для предметов стоимостью от 60
              рублей и выше стоимость доставки составляет 8 рублей. 2.
              Экспресс-доставка. Этот вид ускоренной почты обеспечивает доставку
              заказа адресату на дом, на следующий рабочий день после
              отправления заказа. Стоимость доставки — всегда 230coм За отправку
              денежного перевода РУП "Белпочта" ничего не взимает. В течение 10
              дней посылка на вашем почтовом отделении хранится бесплатно. Затем
              за каждый день хранения вы платите пеню в размере 200 сом. Если вы
              в течении 30 дней не заберете посылку, она отправится обратно к
              нам. Однако, если у вас нет возможности забрать посылку в
              30-дневный срок, вы можете уведомить почтовое отделение и продлить
              срока хранения. Оплата производится в белорусских рублях при
              получении посылки на почте. При получении заказа необходимо иметь
              при себе паспорт (или другой документ, удостоверяющий личность, на
              имя которого приходит посылка). В стоимость заказа входит
              стоимость вещей, стоимость доставки и упаковки. Чек об оплате,
              выданный почтой, является подтверждающим документом о покупке.
            </h3>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}