import {
  Container,
  Grid,
  Title,
  Text,
  Stack,
  Group,
  Card,
  SimpleGrid,
} from "@mantine/core";
import { IconShield, IconCar, IconClock } from "@tabler/icons-react";

export default function AboutSection() {
  return (
    <section id="about" style={{ padding: "100px 16px", background: "dark" }}>
      <Container size="lg">
        <Grid gutter="xl" align="center">
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Title
              order={2}
              mb="md"
              style={{ fontSize: "2rem", fontWeight: 800 }}
            >
              28+ Tahun Keunggulan Otomotif
            </Title>
            <Text c="dimmed" mb="lg" size="lg">
              Sejak 1995, <strong>AutoCare Pro</strong> dipercaya sebagai
              bengkel pilihan untuk perbaikan dan perawatan otomotif yang aman,
              cepat, dan berkualitas.
            </Text>

            <Stack gap="md">
              <Group>
                <IconShield size={22} color="var(--mantine-color-blue-6)" />
                <Text fw={500}>Teknisi Bersertifikat ASE</Text>
              </Group>
              <Group>
                <IconCar size={22} color="var(--mantine-color-blue-6)" />
                <Text fw={500}>Melayani Semua Merek & Model</Text>
              </Group>
              <Group>
                <IconClock size={22} color="var(--mantine-color-blue-6)" />
                <Text fw={500}>Garansi 12 Bulan / 12.000 Mil</Text>
              </Group>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Card
              withBorder
              shadow="md"
              radius="lg"
              padding="xl"
              style={{
                background:
                  "linear-gradient(135deg, var(--mantine-color-blue-0), var(--mantine-color-cyan-0))",
                boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
              }}
            >
              <SimpleGrid cols={2} spacing="xl">
                <Stack gap={4}>
                  <Text fw={800} fz={28} c="blue">
                    5.000+
                  </Text>
                  <Text c="dimmed">Mobil Dilayani</Text>
                </Stack>
                <Stack gap={4}>
                  <Text fw={800} fz={28} c="blue">
                    98%
                  </Text>
                  <Text c="dimmed">Kepuasan Pelanggan</Text>
                </Stack>
                <Stack gap={4}>
                  <Text fw={800} fz={28} c="blue">
                    28+
                  </Text>
                  <Text c="dimmed">Tahun Pengalaman</Text>
                </Stack>
                <Stack gap={4}>
                  <Text fw={800} fz={28} c="blue">
                    4.9★
                  </Text>
                  <Text c="dimmed">Rating Rata-rata</Text>
                </Stack>
              </SimpleGrid>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
}
