<h2>Single (default)</h2>
<sc-accordion id="inner-accordion">
  <sc-accordion-item heading="I" active>
    Add <code>active</code> attribute to open an item by default.
  </sc-accordion-item>
  <sc-accordion-item heading=" Am">
    Lorem ipsum dolor sit
  </sc-accordion-item>
  <sc-accordion-item heading="Groot">
    Lorem ipsum dolor sit
  </sc-accordion-item>
</sc-accordion>

<h2>Multiple</h2>
<sc-accordion multiple>
  <sc-accordion-item heading="We">
    Lorem ipsum dolor sit
  </sc-accordion-item>
  <sc-accordion-item heading="Are">
    Lorem ipsum dolor sit
  </sc-accordion-item>
  <sc-accordion-item heading="Groot">
    Lorem ipsum dolor sit
  </sc-accordion-item>
</sc-accordion>

<h2>Nested</h2>
<sc-accordion>
  <sc-accordion-item heading="Accordions can be nested too">
    Lorem ipsum dolor sit

    <sc-accordion id="inner-accordion">
      <sc-accordion-item heading="Nested">
        Lorem ipsum dolor sit
      </sc-accordion-item>

      <sc-accordion-item heading="Accordions">
        Lorem ipsum dolor sit
      </sc-accordion-item>
      <sc-accordion-item heading="Are pretty cool">
        Lorem ipsum dolor sit
      </sc-accordion-item>
    </sc-accordion>

  </sc-accordion-item>
  <sc-accordion-item heading="Yayyy"">
    Lorem ipsum dolor sit
  </sc-accordion-item>
</sc-accordion>

<h2>Customise it</h2>
<sc-accordion>
  <sc-accordion-item>
    <div slot="heading">
      <mark>
        Use <code>slot="heading"</code> to customise heading
      </mark>
    </div>
    Lorem ipsum dolor sit
  </sc-accordion-item>
  <sc-accordion-item heading='Use slot="arrow" to customise arrow'>
    <div slot="arrow" style="text-align: center; color: red; width: 60px; height: 60px; font-size: 60px; line-height: 60px">
      &#10084;
    </div>
    Lorem ipsum dolor sit
  </sc-accordion-item>
</sc-accordion>